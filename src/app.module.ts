import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity'
import {List} from "./list/list.entity";
import {ListModule} from "./list/list.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host.docker.internal',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'mydb',
      entities: [User, List],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule, ListModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

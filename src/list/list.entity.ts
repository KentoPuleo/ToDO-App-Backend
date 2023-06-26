import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class List {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    status: boolean;

    @Column( {nullable: true })
    date: string
}

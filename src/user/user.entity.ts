import {Entity, Column, PrimaryGeneratedColumn, AfterUpdate, AfterRemove} from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( { nullable: true })
    name: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    email: string;


    @AfterUpdate()
    logUpdate(){
        console.log("User updated, user:", this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log("Removed User with id:", this.id);
    }
}

import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("User")
@ObjectType("User")
export class User extends BaseEntity{
    
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: String;
    @Field()
    @Column()
    name: String;
    @Field()
    @Column()
    dept: String;
    @Field()
    @Column()
    city: String;
    
    



}
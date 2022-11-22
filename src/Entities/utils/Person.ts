import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  //baseentity help us creat crud
  
  @Entity()
  export class Person extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    public id: number;
  
    @Column({ name: 'first_name', nullable: true})
    first_name: string;
  
    @Column({ name: 'last_name', nullable: true})
    last_name: string;
  
    @Column({
      unique: true,
    })
    email: string;

  }
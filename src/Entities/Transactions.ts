import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
import { Student } from "./Student";

  //creating the type enmu
  //to limit the string type
  export enum  TransactionTypes{
    SAVINGS = 'savings',
    LUNCH= 'lunch',
    
  }

  
  @Entity("transactions")
  export class Transactions extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    public id: number;
  
    @Column({
      type:'enum',
      enum:TransactionTypes
    })
    type: string;

    @Column({
        type:'numeric',
      })
      amount: number;

      //specifying the relationship many to one with students
      @ManyToOne(
        () => Student,
        student => student.transactions
      )

      @JoinColumn({
        name:'student_id'  //specifying name of primary key
      })
      student:Student;  //specifying the colomn


  }
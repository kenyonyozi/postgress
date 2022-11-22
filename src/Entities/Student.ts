import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Transactions } from "./Transactions";
import { Person } from "./utils/Person";

//baseentity help us creat crud

@Entity("student")
export class Student extends Person {
  @Column({
    unique: true, nullable: true
  })
  bank_id: number;

  @Column({
    type: "numeric", nullable: true
  })
  balance: number;

  //relationship one to many with transactions 
  @OneToMany( 
    () => Transactions,
    transactions => transactions.student
  )
  transactions:Transactions[]


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

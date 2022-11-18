import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

//baseentity help us creat crud

@Entity("user")
export class User extends BaseEntity {
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

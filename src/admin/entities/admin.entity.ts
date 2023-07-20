// admin.entity.ts
import { Employee } from 'src/employe/entities/employe.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  role: string;

  @OneToMany(() => Employee, employee => employee.admin) // Relation OneToMany avec l'entité Employee
  employees: Employee[];

  @OneToMany(() => User, user => user.admin) // Relation OneToMany avec l'entité User
  users: User[];
}

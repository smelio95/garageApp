// employee.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Admin } from "src/admin/entities/admin.entity";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Admin, admin => admin.employees) // Relation ManyToOne avec l'entité Admin
  admin: Admin; // Propriété pour stocker l'administrateur associé à cet employé
}



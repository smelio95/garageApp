import { Admin } from "src/admin/entities/admin.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    firstname: string;

    @Column()
    email: string;

    @Column()
    telephone: number;

    @Column()
    subject: string;

    @Column()
    message: string;

    @ManyToOne(() => Admin, admin => admin.users) // Relation ManyToOne avec l'entité Admin
    admin: Admin; // Propriété pour stocker l'administrateur associé à cet utilisateur
}
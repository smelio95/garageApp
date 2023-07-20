import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  year: number;

  @Column()
  fuel: string;

  @Column()
  kilometers: number;

  @Column()
  price: number;
}

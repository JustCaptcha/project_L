import { UserRoles } from '../logics/user/dto/user-roles';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['name'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdDate: Date 

  @Column('varchar')
  role: UserRoles;

  @Column('varchar')
  name: string;

  @Column('varchar', {
    unique: true,
  })
  email: string;

  @Column('varchar')
  password: string;

}

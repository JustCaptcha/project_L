import { UserRoles } from './user-roles';
import { MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @MinLength(5)
  readonly name: string;
  readonly email: string;
  readonly password: string;
  
  @IsNotEmpty()
  readonly role: UserRoles;
}

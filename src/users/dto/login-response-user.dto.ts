import { OmitType } from '@nestjs/swagger';
import { LoginResponseUserDto } from 'auth';
import { User } from '../entities/user.entity';

export class LoginUserDto
  extends OmitType(User, [
    'hash',
    '__entity',
    'loadPreviousPassword',
    'password',
    'previousPassword',
  ])
  implements LoginResponseUserDto {}

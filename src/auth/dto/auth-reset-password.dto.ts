import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AuthResetPasswordDto as IAuthResetPasswordDto } from 'shared-kommshop-types';

export class AuthResetPasswordDto implements IAuthResetPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  hash: string;
}

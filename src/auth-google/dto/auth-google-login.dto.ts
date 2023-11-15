import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AuthGoogleLoginDto as IAuthGoogleLoginDto } from 'shared-kommshop-types';

export class AuthGoogleLoginDto implements IAuthGoogleLoginDto {
  @ApiProperty({ example: 'abc' })
  @IsNotEmpty()
  idToken: string;
}

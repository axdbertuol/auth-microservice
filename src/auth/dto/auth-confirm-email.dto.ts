import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AuthConfirmEmailDto as IAuthConfirmEmailDto } from 'kommshop-types';
export class AuthConfirmEmailDto implements IAuthConfirmEmailDto {
  @ApiProperty()
  @IsNotEmpty()
  hash: string;
}

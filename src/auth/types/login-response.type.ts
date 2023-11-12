import { LoginUserDto } from 'src/users/dto/login-response-user.dto';

export type LoginResponseType = Readonly<{
  token: string;
  refreshToken: string;
  tokenExpires: number;
  user: LoginUserDto;
}>;

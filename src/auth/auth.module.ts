import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AnonymousStrategy } from './strategies/anonymous.strategy';
import { UsersModule } from '../users/users.module';
import { MailModule } from '../mail/mail.module';
import { IsExist } from '../utils/validators/is-exists.validator';
import { IsNotExist } from '../utils/validators/is-not-exists.validator';
import { SessionModule } from '../session/session.module';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '@/config/config.type';

@Module({
  imports: [
    UsersModule,
    SessionModule,
    PassportModule,
    MailModule,
    JwtModule.registerAsync({
      inject: [ConfigService<AllConfigType>],
      useFactory(configService: ConfigService<AllConfigType>) {
        const auth = configService.get('auth', { infer: true });
        return {
          secret: auth?.secret,
          signOptions: {
            expiresIn: auth?.expires,
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    IsExist,
    IsNotExist,
    AuthService,
    JwtStrategy,
    JwtRefreshStrategy,
    AnonymousStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secret_key', // Секретный ключ для подписи JWT (должен браться из .env)
      signOptions: { expiresIn: '60m' }, // Установите желаемый срок действия токена
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

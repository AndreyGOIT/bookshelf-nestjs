import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userRepository: UsersRepository) {}
  async validateUser(
    email: string,
    password: string,
  ): Promise<{ userId: number }> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      throw new UnauthorizedException();
    }
    return {
      userId: user.id,
    };
  }
}

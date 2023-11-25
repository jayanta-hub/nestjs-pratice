import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { User } from './user.entity';
import { randomUUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(private jwtService: JwtService) {}

  async signUp(userInfoDto: any) {
    try {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(userInfoDto.password, saltOrRounds);
      userInfoDto['id'] = randomUUID();
      userInfoDto['password'] = hash;
      const result = await User.create(userInfoDto, { returning: false });
      // To Do  return successful message
      return result;
    } catch (e) {
      this.logger.error(e);
      return e;
    }
    // return authCredentialsDto;
  }
  async signIn(userInfoDto: any) {
    console.log(
      '🚀 ~ file: auth.service.ts:27 ~ AuthService ~ signIn ~ userInfoDto:',
      userInfoDto,
    );
    if (!userInfoDto) throw new UnauthorizedException('EMPTY');
    try {
      const user = await User.findOne({
        where: { userId: userInfoDto.userId },
      });
      // Compare the hash password
      const isMatch = await bcrypt.compare(userInfoDto.password, user.password);
      if (!isMatch) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const payload = { sub: user.id, username: user.email };
      const accessToken = await this.jwtService.signAsync(payload);
      return {
        userId: user.userId,
        email: user.email,
        access_token: accessToken,
        message: 'Login successful',
      };
    } catch (error) {
      console.log(
        '🚀 ~ file: auth.service.ts:49 ~ AuthService ~ signIn ~ error:',
        error,
      );
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}

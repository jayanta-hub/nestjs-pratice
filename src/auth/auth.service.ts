import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { User } from './user.entity';
import { randomUUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(private jwtService: JwtService) {}

  async signUp(userInfoDto: any) {
    try {
      userInfoDto['id'] = randomUUID();
      let result = await User.create(userInfoDto, { returning: false });
      // To Do  return successful message
      return result;
    } catch (e) {
      this.logger.error(e);
      return e;
    }
    // return authCredentialsDto;
  }
  async signIn(userInfoDto: any) {
    try {
      const user = await User.findOne({
        where: { firstname: userInfoDto.firstname },
      });

      if (!user || user.password !== userInfoDto.password) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const payload = { sub: user.id, username: user.firstname };
      const accessToken = await this.jwtService.signAsync(payload);
      return {
        message: 'Login successful',
        username: user.firstname,
        access_token: accessToken,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}

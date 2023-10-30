import {
  Injectable,
  UnauthorizedException,
  HttpException,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { User } from './user.entity';
import { randomUUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { ValidateUser } from './dto/auth-interface';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private jwtService: JwtService;
  async signUp(userInfoDto: any) {
    try {
      userInfoDto['id'] = randomUUID();
      let result = await User.create(userInfoDto, { returning: false });
      console.log(
        '🚀 ~ file: auth.service.ts:13 ~ AuthService ~ signIn ~ result:',
        result,
      );
      // To Do  return successful message
      return result;
    } catch (e) {
      // this.logger.error(e);
      return e;
    }
    // return authCredentialsDto;
  }
  async signIn(userInfoDto: any) {
    await User.findOne(userInfoDto.firstname)
      .then((r) => {
        if (r?.password !== userInfoDto.password) {
          throw new UnauthorizedException();
        }
        const payload = { sub: r.id, username: r.firstname };
        console.log(
          '🚀 ~ file: auth.service.ts:43 ~ AuthService ~ .then ~ payload:',
          this.jwtService.signAsync(payload),
        );
        return {
          access_token: this.jwtService.signAsync(payload),
        };
      })
      .catch(this.logger.error);
  }
  async getAll() {
    let result = await User.findAll();
    console.log(
      '🚀 ~ file: auth.service.ts:37 ~ AuthService ~ getAll ~ result:',
      result,
    );
    return result;
  }
}

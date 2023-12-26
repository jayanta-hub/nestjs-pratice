import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { Users } from './users.entity';
import { randomUUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { QueryService } from 'src/query/query.service';
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private jwtService: JwtService,
    private query: QueryService,
  ) {
    //
  }

  async signUp(userInfoDto: any) {
    console.log(
      '🚀 ~ file: auth.service.ts:18 ~ AuthService ~ signUp ~ userInfoDto:',
      userInfoDto,
    );
    try {
      const ExsitingUser = await this.query.findOne({
        where: { userid: userInfoDto.userid },
      });
      if (ExsitingUser?.length == 0) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(userInfoDto.password, saltOrRounds);
        userInfoDto['id'] = randomUUID();
        userInfoDto['password'] = hash;
        const result = await Users.create(userInfoDto, { returning: false });
        // To Do  return successful message
        return result;
      } else {
        return new UnauthorizedException(
          'userId is existing. Please try with another userId.',
        );
      }
    } catch (e) {
      this.logger.error(e);
      return e;
    }
    // return authCredentialsDto;
  }
  async signIn(userInfoDto: any) {
    if (!userInfoDto) throw new UnauthorizedException('EMPTY');
    try {
      // const data = await this.query.findOne({
      //   where: { userid: userInfoDto.userid },
      // });
      // console.log('🚀 ~ data:', data);

      const user = await Users.findOne({
        where: { userid: userInfoDto.userid },
      });
      // Compare the hash password
      const isMatch = await bcrypt.compare(userInfoDto.password, user.password);
      if (!isMatch) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const payload = { sub: user.id, username: user.email };
      const accessToken = await this.jwtService.signAsync(payload);
      return {
        status: 200,
        data: {
          userid: user.userid,
          email: user.email,
          access_token: accessToken,
        },
        message: 'Login successful',
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
  async userProfile(userProfileDto: any) {
    console.log('first', userProfileDto);
  }
}

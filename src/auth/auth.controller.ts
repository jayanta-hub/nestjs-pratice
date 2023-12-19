import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SingupDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/signin')
  @UsePipes(new ValidationPipe())
  signIn(@Body() userInfoDto: SigninDto) {
    return this.authService.signIn(userInfoDto);
  }
  @Post('/signup')
  @UsePipes(new ValidationPipe())
  signUp(@Body() authCredentialsDto: SingupDto) {
    return this.authService.signUp(authCredentialsDto);
  }
  @Post('/user/profile')
  @UsePipes(new ValidationPipe())
  userProfile(@Body() userProfileDto: any) {
    return this.authService.userProfile(userProfileDto);
  }
}

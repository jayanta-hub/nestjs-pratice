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
import { CreateUser, ValidateUser } from './dto/auth-interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/signin')
  @UsePipes(new ValidationPipe())
  signIn(@Body() userInfoDto: ValidateUser) {
    return this.authService.signIn(userInfoDto);
  }
  @Post('/signup')
  signUp(@Body() authCredentialsDto: CreateUser) {
    return this.authService.signUp(authCredentialsDto);
  }
}

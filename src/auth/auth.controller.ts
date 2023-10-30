import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUser, ValidateUser } from './dto/auth-interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  @UsePipes(new ValidationPipe())
  signIn(@Body() userInfoDto: ValidateUser) {
    return this.authService.signIn(userInfoDto);
  }
  @Post('/signup')
  signUp(@Body() authCredentialsDto: CreateUser): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }
  @Get()
  getAll() {
    return this.authService.getAll();
  }
}

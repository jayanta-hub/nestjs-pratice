import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [UserModule],
  providers: [
    UserService,
    JwtAuthGuard,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

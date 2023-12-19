import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AuthGuard } from '../guards/auth.guard';
import { QueryService } from 'src/query/query.service';
import { QueryModule } from 'src/query/query.module';

@Module({
  imports: [UserModule, QueryModule],
  providers: [
    UserService,
    JwtAuthGuard,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
    QueryService,
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { DeleteUser } from 'src/auth/dto/auth-interface';
import { UserService } from './users.service';
import { AuthGuard } from '../guards/auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.userService.getAll();
  }
  @UseGuards(AuthGuard)
  @Delete('delete/:id')
  delete(@Param() id: DeleteUser) {
    return this.userService.deleteById(id);
  }
}

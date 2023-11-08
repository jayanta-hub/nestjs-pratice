import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Op } from 'sequelize';
import { DeleteUser } from 'src/auth/dto/auth-interface';
import { User } from 'src/auth/user.entity';

@Injectable()
export class UserService {
  async getAll() {
    let result = await User.findAll();
    return result;
  }

  async deleteById(id: DeleteUser) {
    try {
      await User.destroy({
        where: {
          id: {
            [Op.eq]: id.id,
          },
        },
      });
      return {
        message: `Delete successful.`,
      };
    } catch (error) {
      throw new UnauthorizedException('Something went wrong');
    }
  }
}

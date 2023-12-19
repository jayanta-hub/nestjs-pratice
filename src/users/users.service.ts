import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Op } from 'sequelize';
import { DeleteUser } from 'src/auth/dto/auth-interface';
import { Users } from 'src/auth/users.entity';
import { QueryService } from 'src/query/query.service';

@Injectable()
export class UserService {
  constructor(private query: QueryService) {
    //
  }
  async getAll() {
    const users = await this.query.dbQuery();
    console.log(
      '🚀 ~ file: users.service.ts:15 ~ UserService ~ getAll ~ users:',
      users,
    );
    const result = await Users.findAll();
    return result;
  }

  async deleteById(id: DeleteUser) {
    try {
      await Users.destroy({
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

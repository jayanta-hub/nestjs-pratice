import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { Op } from 'sequelize';
import { DeleteUser } from 'src/auth/dto/auth-interface';
// import { Users } from 'src/auth/users.entity';
import { QueryService } from 'src/query/query.service';

@Injectable()
export class UserService {
  constructor(private query: QueryService) {
    //
  }
  async getAll() {
    const data = await this.query.findAll();
    // const result = await Users.findAll();
    return data;
  }

  async deleteById(id: DeleteUser) {
    try {
      await this.query.delete(id.id);
      // await Users.destroy({
      //   where: {
      //     id: {
      //       [Op.eq]: id.id,
      //     },
      //   },
      // });
      return {
        message: `Delete successful.`,
      };
    } catch (error) {
      throw new UnauthorizedException('Something went wrong');
    }
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class QueryService {
  constructor(@Inject('SEQUELIZE') private db: Sequelize) {
    //
  }

  async dbQuery() {
    console.log('first');
    const result = await this.db.query(
      `SELECT * FROM users WHERE "firstname"="Jayanta"`,
    );
    console.log(
      '🚀 ~ file: query.service.ts:14 ~ QueryService ~ dbQuery ~ result:',
      result,
    );
    return result;
  }
}

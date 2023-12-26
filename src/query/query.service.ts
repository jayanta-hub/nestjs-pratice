import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class QueryService {
  constructor(@Inject('SEQUELIZE') private db: Sequelize) {
    this.create();
  }
  async dbQuery() {
    const result = await this.db.query(
      `SELECT * FROM public.users where firstname='Saty'`,
    );
    return result[0];
  }
  async findOne(query: object) {
    const result = await this.db.query(
      `SELECT * FROM public.users ${Object.keys(query)[0]} ${
        Object.keys(Object.values(query)[0])[0]
      }='${Object.values(Object.values(query)[0])[0]}'`,
    );
    return result[0];
  }
  async findAll() {
    const result = await this.db.query(`SELECT * FROM public.users`);
    return result[0];
  }
  async delete(id) {
    const result = await this.db.query(
      `DELETE FROM public.users WHERE id='${id}'`,
    );
    return result[0];
  }
  async create(tableName = 'userData') {
    // console.log('first');
    try {
      await this.db.query(
        `CREATE TABLE IF NOT EXISTS ${tableName} (
          id varchar(255) NOT NULL PRIMARY KEY,
          firstname varchar(255),
          lastname varchar(255),
          title varchar(255),
          password varchar(255),
          email varchar(255),
          userid varchar(255),
          phonenumber varchar(255),
          profilepic varchar(255)
      )`,
      );
      // console.log('first', data);
    } catch (e) {
      // console.log(
      //   '🚀 ~ file: query.service.ts:53 ~ QueryService ~ create ~ e:',
      //   e,
      // );
    }
  }
}

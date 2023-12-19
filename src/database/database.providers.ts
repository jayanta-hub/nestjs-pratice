import { Injectable, Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Users } from 'src/auth/users.entity';
import { UsersAddress } from 'src/auth/usersaddress.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = await new Database().init();

      // * Add models
      sequelize.addModels([Users, UsersAddress]);
      await sequelize.sync(); //{ force: true, alter: true }

      return sequelize;
    },
  },
];

@Injectable()
export class Database {
  private readonly logger = new Logger(Database.name);
  private db: Sequelize;

  async init() {
    try {
      this.db = new Sequelize({
        logging: false,
        username: 'postgres',
        password: 'Garu@123',
        database: 'postgres',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
      });

      this.db
        .authenticate()
        .then(() => this.logger.debug('Database connection successful.'))
        .catch((e) => {
          console.log('error', e);
        });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      this.logger.debug('Database connection fail.');
    }
    return this.db;
  }
}

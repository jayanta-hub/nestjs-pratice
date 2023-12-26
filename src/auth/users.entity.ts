import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: true })
export class Users extends Model {
  @Column({
    primaryKey: true,
    type: DataType.STRING,
  })
  id: string;

  @Column({ type: DataType.STRING })
  firstname: string;

  @Column({ type: DataType.STRING })
  lastname: string;

  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING })
  password: string;

  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  userid: string;

  @Column({ type: DataType.STRING })
  phonenumber: string;

  @Column({ type: DataType.STRING })
  profilepic: string;

  // @Column({ type: DataType.STRING })
  // token: string;
}

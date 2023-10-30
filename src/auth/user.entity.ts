import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'auth', timestamps: true })
export class User extends Model {
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
  gender: string;

  @Column({ type: DataType.STRING })
  password: string;
}

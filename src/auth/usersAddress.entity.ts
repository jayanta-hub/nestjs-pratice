import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'address', timestamps: true })
export class UsersAddress extends Model {
  @Column({
    primaryKey: true,
    type: DataType.STRING,
  })
  userId: string;

  @Column({ type: DataType.STRING })
  currentaddress: string;

  @Column({ type: DataType.STRING })
  permanentaddress: string;
}

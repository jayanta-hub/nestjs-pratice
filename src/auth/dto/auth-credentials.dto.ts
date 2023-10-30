import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'user', timestamps: true })
export class AuthSinginDto extends Model {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  firstname: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  lastname: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  gender: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;
}
export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;
}

import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
// import { Model, Table } from 'sequelize-typescript';

// @Table({ tableName: 'user', timestamps: true })
export class SingupDto {
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

  @IsString()
  title: string;

  @IsString()
  @MinLength(4)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'userId should contain lower case, upper case, numbers and special Character.',
  })
  userId: string;
}
export class SigninDto {
  @IsString()
  userId: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;
}

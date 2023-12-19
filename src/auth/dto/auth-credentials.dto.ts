import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
export class SingupDto {
  @ApiProperty({
    description: 'The firstname of the User',
    example: 'Jayanta',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  firstname: string;

  @ApiProperty({
    description: 'The lastname of the User',
    example: 'Garu',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  lastname: string;

  @ApiProperty({
    description: 'The gender of the User',
    example: 'Male',
  })
  @IsString()
  @MinLength(10)
  @MaxLength(10)
  phonenumber: string;

  @ApiProperty({
    description: 'The password of the User',
    example: 'Password@123',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;

  @ApiProperty({
    description: 'The title of the User',
    example: 'Mr.',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The userId of the User',
    example: 'Jayanta123',
  })
  @IsString()
  @MinLength(4)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'userId should contain lower case, upper case, numbers and special Character.',
  })
  userId: string;
}
export class SigninDto {
  @ApiProperty({
    description: 'The userId of the User',
    example: 'Jayanta123',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'The password of the User',
    example: 'Password@123',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;
}

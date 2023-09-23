import { IsNotEmpty, IsString, MinLength, MaxLength, IsEmail, IsStrongPassword, Length, IsNumberString, IsOptional } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(255)
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  @MinLength(4)
  @MaxLength(100)
  password: string

  @IsOptional()
  @IsNumberString()
  @Length(10)
  phone?: string
}

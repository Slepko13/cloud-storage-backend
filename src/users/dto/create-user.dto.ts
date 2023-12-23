import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@gmail.com'
  })
  email: string;

  @ApiProperty({
    default: 'Test user'
  })
  fullName: string;

  @ApiProperty({
    default: 12345
  })
  password: string;
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], /* Connect the entity to its parent module. 
  This creates Repository for us 
  define which repositories are registered in the current scope. */
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

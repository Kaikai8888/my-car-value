import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  // Di system可直接透過type得知需要inject的dependency, 但generics則無法，因此將generic type傳入decorator，讓ＤＩ知道所需的dependency
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password }) /* 
    create an instance of user entity
    當我們有定義schema驗證邏輯在dto內時，create時會進行驗證*/

    return this.repo.save(user) //存入db
  }
}

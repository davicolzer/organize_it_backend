import { Injectable } from "@nestjs/common";
import { create } from './use-cases/createUser'
import { _delete } from "./use-cases/deleteUser";
import { Prisma } from "@prisma/client";

@Injectable()
export default class UserService{
  async createUser (dto: Prisma.UserCreateInput) {
    try{
      return await create(dto);
    }catch (e) {
      throw new Error(e.message);
    }
  }

  async deleteUser (id: string) {
    try{
      return await _delete(id) 
    } catch(e) {
      throw new Error(e.message)
    }
  }
}


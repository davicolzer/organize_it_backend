import { Request, Response } from "express";

export class ListUserController{
  async handle(request:Request, response: Response){
    return response.status(201).send({message: "Usuário criado com sucesso."});
  }
}
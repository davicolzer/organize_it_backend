import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';

const createUserService = new CreateUserService()

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { data } = request.body;

    const user = createUserService.execute(data);
    const {} = request.body;
  }
}

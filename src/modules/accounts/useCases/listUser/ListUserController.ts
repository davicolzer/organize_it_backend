import { Request, Response } from 'express';
import { ListUserService } from './ListUserService';

const listUserService = new ListUserService();

export class ListUserController {
  async handle(request: Request, response: Response) {
    const data = request.body;
    console.log(request.body);

    const users = await listUserService.execute(data);

    return response.status(200).json(users);
  }
}

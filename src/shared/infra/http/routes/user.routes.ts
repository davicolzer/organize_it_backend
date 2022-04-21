import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUser/ListUserController";

const usersRoutes = Router();

const listUserController = new ListUserController();
const createUserController = new CreateUserController();

usersRoutes.get("/", listUserController.handle);
usersRoutes.post("/create", createUserController.handle);

export { usersRoutes };

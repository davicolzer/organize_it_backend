import { Router } from "express";
import { ListUserController } from "../../../../modules/accounts/useCases/listUser/listUserController";

const usersRoutes = Router();

const listUserController = new ListUserController();

usersRoutes.get("/", listUserController.handle);

export { usersRoutes };

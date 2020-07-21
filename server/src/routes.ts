import { UserController } from "./controller/UserController";
import { AuthController }  from './controller/AuthController';
import { AuthMiddleware }from './middlewares/authMiddleware';

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    middleware: AuthMiddleware,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    middleware: AuthMiddleware,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    middleware: AuthMiddleware,
    action: "remove"
},{
    method: "post",
    route: "/login",
    controller: AuthController,
    action: "login"
}
];
import { Router } from "express";
import { usersRegister } from "../modules/auth/register/usersRegister.controller";
import { userLogin } from "../modules/auth/login/userLogin.controller";

const auth = Router();

auth.post("/register", usersRegister);
auth.post("/login", userLogin);

export default auth;

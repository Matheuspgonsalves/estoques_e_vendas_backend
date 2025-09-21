import { Router } from "express";
import { usersRegister } from "../modules/auth/register/usersRegister.controller";

const auth = Router();

auth.post("/register", usersRegister);

export default auth;

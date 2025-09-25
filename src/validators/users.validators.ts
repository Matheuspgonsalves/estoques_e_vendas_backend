import joi from "joi";
import { Users } from "../interfaces/users.interface";

export const usersRegisterValidator: joi.ObjectSchema<Users> = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  role: joi.string().default("admin"),
}).unknown(false);

export const usersLoginValidator: joi.ObjectSchema<Omit<Users, "role" | "name">> = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
}).unknown(false);

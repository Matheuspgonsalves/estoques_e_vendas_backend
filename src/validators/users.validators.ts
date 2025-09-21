import joi from "joi";
import { Users } from "../interfaces/users.interface";

export const usersValidator: joi.ObjectSchema<Users> = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  role: joi.string().default("admin"),
}).unknown(false);

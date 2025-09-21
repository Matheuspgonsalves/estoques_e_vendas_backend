import { Request, Response } from "express";
import { usersValidator } from "../../../validators/users.validators";
import { Users } from "../../../interfaces/users.interface";
import { createUser } from "./usersRegister.service";

export const usersRegister = async (req: Request, res: Response) => {
  const body: Users = req.body;
  const userValidation: any = usersValidator.validate(body);

  if (userValidation.error) {
    return res
      .status(400)
      .send({ message: userValidation.error.details[0].message });
  }

  const result = await createUser(body);

  if (result.error) {
    return res.status(409).send({ message: result.error });
  }

  return res.status(201).send({
    message: "User successfully created",
    user: result.user,
  });
};

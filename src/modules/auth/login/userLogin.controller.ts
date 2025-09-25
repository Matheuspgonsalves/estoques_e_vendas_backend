import { Request, Response } from "express";
import { Users } from "../../../interfaces/users.interface";
import { usersLoginValidator } from "../../../validators/users.validators";
import { signUpUser } from "./userLogin.service";

export const userLogin = async (req: Request, res: Response) => {
  const body: Users = req.body;
  const userValidation: any = usersLoginValidator.validate(body);

  if ( userValidation.error) {
    return res.status(400).send({message: userValidation.error.details[0].message});
  }

  const result = await signUpUser(body);

  if (result.error) {
    return res.status(401).send({message: result.error});
  }

  return res.status(200).send({
    message: "Login successfuly",
    ...result
  });
}
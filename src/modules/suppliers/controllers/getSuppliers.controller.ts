import { Response } from "express";
import JwtRequest from "../../../interfaces/authRequest.interface";
import { findSuppliers } from "../services/findSuppliers.service";

export const getSuppliers = async (req: JwtRequest, res: Response) => {
  const user_id: string = req.jwt!.id;

  const supplier = await findSuppliers(user_id);

  if (supplier.length === 0) {
    return res.status(404).send({message: "No suppliers found"});
  }

  return res.status(200).send({ message: "OK", supplier });
};

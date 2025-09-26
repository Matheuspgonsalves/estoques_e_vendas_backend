import { Response } from "express";
import JwtRequest from "../../../interfaces/authRequest.interface";
import { findSupplierById } from "../services/findSuppliersById.service";

export const getSuppliersById = async (req: JwtRequest, res: Response) => {
  const id: string = req.params.id;

  const supplier = await findSupplierById(id);

  if (!supplier) {
    return res.status(404).send({message: "Supplier not found"});
  }

  return res.status(200).send({message: "OK", user: supplier});
};

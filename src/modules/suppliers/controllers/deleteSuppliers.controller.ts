import { Response } from "express";
import JwtRequest from "../../../interfaces/authRequest.interface";
import { deleteSupplier } from "../services/deleteSuppliers.service";

export const deleteSuppliers = async (req: JwtRequest, res: Response) => {
  const supplierId = req.params.id;

  if (!supplierId) {
    return res.status(400).send({message: "Supplier id cannot be empty"});
  }

  const removeSupplier = deleteSupplier(supplierId);

  return res.status(200).send({message: "Supplier successfull deleted"});
}
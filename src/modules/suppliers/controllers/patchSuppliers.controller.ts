import { Response } from "express";
import JwtRequest from "../../../interfaces/authRequest.interface";
import { Suppliers } from "../../../interfaces/suppliers.interface";
import { suppliersPatchValidator } from "../../../validators/suppliers.validator";
import { patchSupplier } from "../services/patchSuppliers.service";

export const patchSuppliers = async (req: JwtRequest, res: Response) => {
  const body: Suppliers = req.body;
  const supplierId: string = req.params.id;

  if (supplierId == undefined) {
    return res.status(400).send({message: "Supplier Id cannot be empty"});
  }

  const bodyValidation = suppliersPatchValidator.validate(body);

  if (bodyValidation.error) {
    return res.status(400).send({message: bodyValidation.error.details[0].message});
  }

  const updateSupplier = await patchSupplier(body, supplierId);

  if (updateSupplier.error) {
    return res.status(400).send({message: updateSupplier.error});
  }

  return res.status(200).send({message: "Supplier successfull updated", supplier: updateSupplier});
}
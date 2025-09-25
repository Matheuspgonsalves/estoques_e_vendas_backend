import { Response } from "express";
import { Suppliers } from "../../../interfaces/suppliers.interface";
import { suppliersValidator } from "../../../validators/suppliers.validator";
import { createSupplier } from "../services/createSuppliers.service";
import JwtRequest from "../../../interfaces/authRequest.interface";

export const createSuppliers = async (req: JwtRequest, res: Response) => {
  const body: Suppliers = req.body;
  const user_id: any = req.jwt?.id;
  const suppliersValidation = suppliersValidator.validate(body);

  if (suppliersValidation.error) {
    return res
      .status(400)
      .send({ message: suppliersValidation.error.details[0].message });
  }

  const result = await createSupplier(body, user_id);

  if (result.error) {
    return res.status(409).send({ message: result.error });
  }

  return res.status(201).send({
    message: "Supplier successfully created",
    user: result.user,
  });
};

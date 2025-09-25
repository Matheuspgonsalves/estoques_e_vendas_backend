import joi, { func } from "joi";
import { Suppliers } from "../interfaces/suppliers.interface";
import { cnpj } from "@dmalbuquerque/cpf-cnpj-validator";

export const suppliersValidator: joi.ObjectSchema<Suppliers> = joi.object({
  name: joi.string().required(),
  cnpj: joi.string().required(),
  phone_number: joi.string().required(),
}).unknown(false);


export function documentIsValid(document: string) {
  return cnpj.isValid(document);
}
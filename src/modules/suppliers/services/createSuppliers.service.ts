import prisma from "../../../configs/database";
import { Suppliers } from "../../../interfaces/suppliers.interface";
import { documentIsValid } from "../../../validators/suppliers.validator";

export const createSupplier = async (data: Suppliers, userId: string) => {
  const { name, cnpj, phone_number } = data;

  if (cnpj === "" || cnpj == undefined) {
    return {erro: "Error: cnpj cannot be empty"};
  }

  const existingSupplier = await prisma.supplier.findUnique({
    where: { cnpj: cnpj },
  });

  if (existingSupplier) {
    return { error: "Error: CNPJ already exists" };
  }

  if (!documentIsValid(cnpj)) {
    return { error: "Error: CNPJ is not valid" };
  }

  const newSupplier = await prisma.supplier.create({
    data: {
      name,
      cnpj,
      phone_number,
      userId,
    },
  });

  return { user: newSupplier };
};

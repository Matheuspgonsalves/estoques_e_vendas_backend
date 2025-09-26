import prisma from "../../../configs/database";
import { Suppliers } from "../../../interfaces/suppliers.interface";
import { documentIsValid } from "../../../validators/suppliers.validator";

export const patchSupplier = async (data: Suppliers, id: string) => {
  const { name, cnpj, phone_number } = data;

  if (!documentIsValid(cnpj)) {
      return { error: "Error: CNPJ is not valid" };
    }
  
  const updateData: any = {};

  if (name !== undefined) updateData.name = name;
  if (cnpj !== undefined) updateData.cnpj = cnpj;
  if (phone_number !== undefined) updateData.phone_number = phone_number;

  const updateSupplier = await prisma.supplier.update({
    where: { id },
    data: updateData
  });

  return { supplier: updateSupplier };
}
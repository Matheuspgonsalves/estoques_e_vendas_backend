import prisma from "../../../configs/database";

export const findSuppliers = async (userId: string) => {
  return prisma.supplier.findMany({
    where: {userId},
    select: {
      id: true,
      name: true,
      cnpj: true,
      phone_number: true,
    }
  });
};

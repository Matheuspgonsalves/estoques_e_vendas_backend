import prisma from "../../../configs/database";

export const findSupplierById = async (id: string) => {
  const supplier = await prisma.supplier.findUnique({
    where: {
      id
    }
  });

  return { supplier };
};

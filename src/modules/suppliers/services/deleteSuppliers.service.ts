import prisma from "../../../configs/database"

export const deleteSupplier = async (id: string) => {
  return prisma.supplier.delete({
    where: { id }
  });
}
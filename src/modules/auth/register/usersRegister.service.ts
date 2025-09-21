import prisma from "../../../config/database";
import { Users } from "../../../interfaces/users.interface";
import bcrypt from "bcrypt";

export const createUser = async (data: Users) => {
  const { name, email, password, role } = data;

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return { error: "Error: Email already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const usersCount = await prisma.user.count();

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: role || usersCount === 0 ? "admin" : "vendedor",
    },
  });

  const {password: _, ...userWithoutPassword} = newUser;

  return { user: userWithoutPassword};
};

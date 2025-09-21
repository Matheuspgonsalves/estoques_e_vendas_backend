import { error } from "console";
import prisma from "../../../configs/database";
import { Users } from "../../../interfaces/users.interface";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const signUpUser = async (data: Omit<Users, "name" | "role">) => {
  const { email, password } = data;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: "Invalid email" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return { error: "Invalid password" };
  }

  const newAccesToken: string = jsonwebtoken.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JSON_WEB_TOKEN as string,
    { expiresIn: "24h" }
  );

  const { password: _, ...userWithoutPassword } = user;
  return { user: userWithoutPassword, newAccesToken };
};

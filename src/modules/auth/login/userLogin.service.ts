import { error } from "console";
import prisma from "../../../configs/database";
import { Users } from "../../../interfaces/users.interface";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import authMiddleware from "../../../middlewares/auth-middleware";

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

  const payload: any = {
    id: user.id,
    email: user.email,
    role: user.role,
  }

  const newAccesToken: string = jsonwebtoken.sign(payload, authMiddleware.MySecretWord,{ expiresIn: "24h" });
  
  return { 
    user: payload, 
    newAccesToken 
  };
};

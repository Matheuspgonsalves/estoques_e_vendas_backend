import { Router } from "express";
import auth from "./auth.routes";
import suppliers from "./suppliers.routes";
import authMiddleware from "../middlewares/auth-middleware";

const index = Router();

index.use("/auth", auth);
index.use("/suppliers", authMiddleware.checkToken, suppliers);

export default index;

import { Router } from "express";
import auth from "./auth.routes";

const index = Router();

index.use("/auth", auth);

export default index;

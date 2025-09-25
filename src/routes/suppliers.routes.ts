import { Router } from "express";
import { createSuppliers } from "../modules/suppliers/controllers/createSuppliers.controller";

const suppliers = Router();

suppliers.post("/", createSuppliers);
suppliers.get("/", () => {});
suppliers.get("/:id", () => {});
suppliers.patch("/:id", () => {});
suppliers.delete("/:id", () => {});

export default suppliers;

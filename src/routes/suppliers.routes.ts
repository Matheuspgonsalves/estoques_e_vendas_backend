import { Router } from "express";
import { createSuppliers } from "../modules/suppliers/controllers/createSuppliers.controller";
import { getSuppliersById } from "../modules/suppliers/controllers/getSuppliersById.controller";
import { getSuppliers } from "../modules/suppliers/controllers/getSuppliers.controller";
import { patchSuppliers } from "../modules/suppliers/controllers/patchSuppliers.controller";
import { deleteSuppliers } from "../modules/suppliers/controllers/deleteSuppliers.controller";

const suppliers = Router();

suppliers.post("/", createSuppliers);
suppliers.get("/:id", getSuppliers);
suppliers.get("/:id", getSuppliersById);
suppliers.patch("/:id", patchSuppliers);
suppliers.delete("/:id", deleteSuppliers);

export default suppliers;

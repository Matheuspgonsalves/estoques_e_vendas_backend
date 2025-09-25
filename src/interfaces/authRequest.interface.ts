import { Request } from "express";

interface JwtRequest extends Request {
  jwt?: {
    id: string
  };
}

export default JwtRequest;
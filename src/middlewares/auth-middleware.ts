import "dotenv/config"
import * as jwt from "jsonwebtoken";

const MySecretWord: string = process.env.JSON_WEB_TOKEN || "";

export const checkToken = (req: any, res: any, next: any) => {
  let token: string = req.headers["x-access-token"] || req.headers["authorization"];

  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, MySecretWord, (err: any, decoded: any) => {
      if (err) {
        return res.status(403).json({message: "Token is not valid"});
      }

      req.jwt = {...decoded, token};
      next();
    });
    return;
  }
  return res.status(403).json({message: "Auth token is not suplied"});
}

export default {
  MySecretWord,
  checkToken,
}

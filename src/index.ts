import express, {Request, Response} from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("You're not suposed to be here");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

import express, {Request, Response} from "express";
import index from "./routes/index.routes";
import 'dotenv/config';

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("You're not suposed to be here");
});

app.use(express.json());
// Entry routes
app.use(index);

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

export default app;

import express from "express";
import cors from "cors";
import transactionRoutes from "./routes/transaction.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  return res.status(200).json({
    message: "API rodando 🚀",
  });
});

app.use("/transactions", transactionRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
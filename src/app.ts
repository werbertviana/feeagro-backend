import "dotenv/config";
import express from "express";
import cors from "cors";
import transactionRoutes from "./routes/transaction.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  return res.status(200).json({
    message: "API rodando 🚀",
  });
});

app.use("/transactions", transactionRoutes);

app.listen(PORT, () => {
   console.log(`Servidor rodando na porta ${PORT}`);
});
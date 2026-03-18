import { Router } from "express";
import {
  deleteTransaction,
  listTransactions,
  storeTransaction,
  summaryTransactions,
  updateTransaction,
} from "../controllers/transaction.controller";

const router = Router();

router.get("/", listTransactions);
router.get("/summary", summaryTransactions);
router.post("/", storeTransaction);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

export default router;
import { Request, Response } from "express";
import {
  createTransaction,
  deleteTransactionById,
  getAllTransactions,
  getTransactionsSummary,
  updateTransactionById,
} from "../services/transaction.service";

export async function listTransactions(_req: Request, res: Response) {
  try {
    const transactions = await getAllTransactions();
    return res.status(200).json(transactions);
  } catch {
    return res.status(500).json({ message: "Erro ao buscar transações" });
  }
}

export async function storeTransaction(req: Request, res: Response) {
  try {
    const { type, value, counterparty } = req.body;

    if (!type || value === undefined || !counterparty) {
      return res.status(400).json({ message: "Dados obrigatórios ausentes" });
    }

    if (type !== "in" && type !== "out") {
      return res
        .status(400)
        .json({ message: "O campo type deve ser 'in' ou 'out'" });
    }

    const numericValue = Number(value);

    if (Number.isNaN(numericValue) || numericValue <= 0) {
      return res
        .status(400)
        .json({ message: "O campo value deve ser um número maior que zero" });
    }

    const transaction = await createTransaction({
      type,
      value: numericValue,
      counterparty,
    });

    return res.status(201).json(transaction);
  } catch {
    return res.status(500).json({ message: "Erro ao criar transação" });
  }
}

export async function summaryTransactions(_req: Request, res: Response) {
  try {
    const summary = await getTransactionsSummary();
    return res.status(200).json(summary);
  } catch {
    return res
      .status(500)
      .json({ message: "Erro ao gerar resumo das transações" });
  }
}

export async function updateTransaction(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { type, value, counterparty } = req.body;

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Id inválido" });
    }

    if (!type || value === undefined || !counterparty) {
      return res.status(400).json({ message: "Dados obrigatórios ausentes" });
    }

    if (type !== "in" && type !== "out") {
      return res
        .status(400)
        .json({ message: "O campo type deve ser 'in' ou 'out'" });
    }

    const numericValue = Number(value);

    if (Number.isNaN(numericValue) || numericValue <= 0) {
      return res
        .status(400)
        .json({ message: "O campo value deve ser um número maior que zero" });
    }

    const updatedTransaction = await updateTransactionById(id, {
      type,
      value: numericValue,
      counterparty,
    });

    return res.status(200).json(updatedTransaction);
  } catch {
    return res.status(500).json({ message: "Erro ao atualizar transação" });
  }
}

export async function deleteTransaction(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Id inválido" });
    }

    await deleteTransactionById(id);

    return res.status(200).json({ message: "Transação removida com sucesso" });
  } catch {
    return res.status(500).json({ message: "Erro ao remover transação" });
  }
}
import { prisma } from "../prisma/client";

type CreateTransactionInput = {
  type: string;
  value: number;
  counterparty: string;
};

type UpdateTransactionInput = {
  type: string;
  value: number;
  counterparty: string;
};

export async function getAllTransactions() {
  return prisma.transaction.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createTransaction(data: CreateTransactionInput) {
  return prisma.transaction.create({
    data,
  });
}

export async function getTransactionsSummary() {
  const transactions = await prisma.transaction.findMany();

  const totalIn = transactions
    .filter((transaction) => transaction.type === "in")
    .reduce((sum, transaction) => sum + transaction.value, 0);

  const totalOut = transactions
    .filter((transaction) => transaction.type === "out")
    .reduce((sum, transaction) => sum + transaction.value, 0);

  const balance = totalIn - totalOut;

  return {
    balance,
    totalIn,
    totalOut,
    count: transactions.length,
  };
}

export async function updateTransactionById(
  id: number,
  data: UpdateTransactionInput,
) {
  return prisma.transaction.update({
    where: { id },
    data,
  });
}

export async function deleteTransactionById(id: number) {
  return prisma.transaction.delete({
    where: { id },
  });
}
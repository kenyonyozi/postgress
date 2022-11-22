import express from "express";
import { Transactions, TransactionTypes } from "../Entities/Transactions";
import { Student } from "../Entities/Student";

const router = express.Router();

//post
router.post("/api/student/:studentId/transaction", async (req, res) => {
  const { studentId } = req.params;

  const { type, amount } = req.body;

  const student = await  Student.findOneBy({ id: parseInt(studentId) });

  if (!student) {
    return res.json({
      msg: "student not found",
    });
  }

  //link transaction to client
  const transaction = Transactions.create({
    amount,
    type,
    student,
  });
  await transaction.save();

  //if we deposit money we want to change the blance of the client

  if (type === TransactionTypes.SAVINGS) {
    student.balance = student.balance + amount;
  } else if (type === TransactionTypes.LUNCH) {
    student.balance = student.balance - amount;
  }
  await student.save()
  return res.json({
    msg: "transactions add",
  });
});

export { router as createTransactionRouter };

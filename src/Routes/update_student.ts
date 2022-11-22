import express, { json } from "express";
import { Student } from "../Entities/Student";

const router = express.Router();

router.put("/api/student/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findOneBy({ id: parseInt(studentId, 10) });
    Student.merge(student, req.body);
    res.json({
      message: "success",
      payload: student,
    });
  } catch (e) {
    res.json({
      message: "fail",
    });
  }
});

export { router as updateStudentRouter };

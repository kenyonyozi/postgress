import express from 'express';
import { Student } from '../Entities/Student';

const router =express.Router()

//delete
router.delete('/api/student/:studentId', async (req, res)=>{
   const {studentId} = req.params;
   const response = await Student.delete(parseInt(studentId))

   return res.json(response)
});

export  {
    router as deleteStudentRouter
}
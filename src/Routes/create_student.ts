import express from 'express';
import { Student } from '../Entities/Student';

const router =express.Router()

//get
router.get('/api/student',async (req:any, res:any) =>{
     await Student.find().then((data) =>{
        res.status(200).json(data)
})

.catch((e) => {
    res.status(500).json({message:"no user"})
  })
});


//post
router.post('/api/student', async (req, res)=>{
    const{first_name,
        last_name,
        email,
        bank_id,
        balance
    } = req.body;
        const student = Student.create({
            first_name:first_name,
            last_name:last_name,
            email:email,
            bank_id:bank_id,
            balance:balance
        })
       await student.save();
       return res.json(student)
});

export  {
    router as createStudentRouter
}

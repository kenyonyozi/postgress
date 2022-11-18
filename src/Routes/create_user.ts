import express from 'express';
import { User } from '../Entities/User';

const router =express.Router()

//get
router.get('/api/user',async (req:any, res:any) =>{
     await User.find().then((data) =>{
        res.status(200).json(data)
})

.catch((e) => {
    res.status(500).json({message:"no user"})
  })
});


//post
router.post('/api/user', async (req, res)=>{
    const{first_name,
        last_name,
        email} = req.body;
        const user = User.create({
            first_name:first_name,
            last_name:last_name,
            email:email
        })
       await user.save();
       return res.json(user)
});

export  {
    router as createUserRouter
}

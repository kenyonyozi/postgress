import express from 'express';
import { User } from '../Entities/User';

const router =express.Router()

//delete
router.delete('/api/user/:userId', async (req, res)=>{
   const {userId} = req.params;
   const response = await User.delete(parseInt(userId))

   return res.json(response)
});

export  {
    router as deleteUserRouter
}
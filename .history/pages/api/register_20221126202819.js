
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';
import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react'

const [succ, setSucc] = useState('red');
dbConnect();
 
export default async function handler (req, res) {
    try {
     const user = await User.create(req.body);
     res.redirect('/');
     setSucc('blue');
     console.log(succ);
     if(!user) {
        return res.json({"code": 'User not create' })
     }
    } catch (error){
      
      res.status(400).json({"status": 'Not able be create user'});
    }
 }
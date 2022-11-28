
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';
import { toast } from 'react-hot-toast';

dbConnect();
 
export default async function handler (req, res) {
    try {
     const user = await User.create(req.body);
     alert('Succced')
     res.redirect('/')
     if(!user) {
        return res.json({"code": 'User not create' })
     }
    } catch (error){
      res.status(400).json({"status": 'Not able be create user'});
    }
 }
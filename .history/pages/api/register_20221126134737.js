import dbConnect from '../../lib/mongodb';
import User from '../../models/schema';

dbConnect();

 export default async function handler (req, res) {
    try {
     const user = await User.create(req.body);
     res.redirect('/')
     alert('created');
     if(!user) {
        return res.json({code: 'User not create' })
     }
    } catch (error){
      res.status(400).json({"status": 'Not able be create user'});
      alert('created');
    }
 }
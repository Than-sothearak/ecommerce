
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';
dbConnect();

 export default async function handler (req, res) {
    try {
     const user = await User.create(req.body);
     res.redirect('/')
     if(!user) {
        return res.json({code: 'User not create' })
     }
    } catch (error){
      res.status(400).json({"status": 'Not able be create user'});
    }
 }
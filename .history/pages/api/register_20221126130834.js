import dbConnect from '../../lib/mongodb';
import User from '../../models/schema';

dbConnect();
alert('dbisconnect')
 export default async function() {
    try {
     const user = await User.create.req.body;
     res.redirect('/')
     if(!user) {
        return res.json({code: 'User not create' })
     }
    }catch {
      res.status(400).json({status: 'Not able be create'})
    }
 }
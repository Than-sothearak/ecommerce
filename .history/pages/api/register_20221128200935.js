
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';
import bcrypt from 'bcryptjs';
import nc from 'next-connect';
import { signToken }from '../../utils/auth';

const handler = nc();

export default handler.post(async (req, res) => {
      
   await dbConnect();
      const newUser = new User({
         email: req.body.email,
         password: bcrypt.hashSync(req.body.password)

      })
      const user = await newUser.save();
       res.redirect('/')
       res.json({status: 'Done Success!'})
       const token = signToken(user);
       res.send({
           token,
           _id: user._id,
           email: user.email, 
           password: user.password, 
       });
  
    });
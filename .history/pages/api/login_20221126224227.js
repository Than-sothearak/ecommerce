import signToken from '../../utils/auth'
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';
import nc from 'next-connect';

dbConnect();
const handler = nc();

handler.post(async (req, res) => {
   
    const email = req.body.email;
    const password = req.body.email
    const user = await User.findOne({email,password})
    if(user) {
        const token = signToken(user);
        res.send({
            token,
            _id: user._id,
            email: user.email, 
            password: user.password, 
        });
    } else {
        res.status(401).send({ message: 'Invalid user or passoword'});
    }
  
}) ;

export default handler;
   


 // const {email, password }= req.body
//  export default async function handler (req, res) {
    
//     
    
//      const user = await User.findOne({email, password})
//      if(!user) {
//          return res.json({status: 'Not be able to find'})
//      } else {
//          res.redirect('/');
//      }
//  }
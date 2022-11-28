import signToken from '../../utils/auth'
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';


handler.post(async (req, res) => {
    
    await dbConnect();
    const email = req.body.email;
    const password = req.body.email
    const user = await User.findOne({email, password})
    if(!user) {
        res.status(401).send({ message: 'Invalid user or passoword'});
    } else {
        res.redirect('/');
        const token = signToken(user);
        res.send({
            token,
            _id: user._id,
            email: user.email, 
            password: user.password, 
        });
    }
  
}) ;

   


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
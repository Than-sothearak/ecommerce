
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';

dbConnect();

export default async function handler (req, res) {
    
       const email = req.body.email;
       const password = req.body.password;
       
        const user = await User.findOne({email, password})
        if(!user) {
            confirm.log('Cant find')
        } else {
            res.redirect('/');
        }
       
       
   
 }

 // const {email, password }= req.body
      
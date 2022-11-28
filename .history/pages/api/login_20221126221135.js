
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';

dbConnect();

export default async function handler (req, res) {
    
       const email = req.body.email;
       const password = req.body.password;
       
       const user = await User.findOne({email: email}, function(err, foundUser) {
        if (err) {
            alert(err);
        } else {
            if (foundUser) {
                if(foundUser.password === password) {
                    res.render('Succed')
                }
            }
        }
       }) 
       
       
   
 }

 // const {email, password }= req.body
        // const user = await User.findOne({email, password})
        // if(!user) {
        //     return res.json({status: 'not able to find'})
        // } else {
        //     res.redirect('/');
        // }
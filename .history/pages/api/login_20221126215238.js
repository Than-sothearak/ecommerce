
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';


dbConnect();
 
export default async function handler (req, res) {
    const {email, password }= req.body
    const user = await User.findOne({email, password})
    if(!User) {
        return res.json({status: 'not able to find'})
    } else {
        res.redirect('/');
    }
 }
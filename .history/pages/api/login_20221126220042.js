
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';
import { useState } from 'react';

dbConnect();
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')

export default async function handler (req, res) {
    
        const {email, password }= req.body
        const user = await User.findOne({email, password})
        if(!user) {
            return alert('not')
        } else {
            res.redirect('/');
        }
 }
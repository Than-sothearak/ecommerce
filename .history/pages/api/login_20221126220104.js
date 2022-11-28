
import User from '../../models/schema';
import dbConnect from '../../lib/mongodb';
import { useState } from 'react';

dbConnect();


export default async function handler (req, res) {
    
   
        const {email, password }= req.body
        const user = await User.findOne({email, password})
        if(!user) {
            return res.json({status: 'not able to find'})
        } else {
            res.redirect('/');
        }
   
 }
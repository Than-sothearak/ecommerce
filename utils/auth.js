import jwt from 'jsonwebtoken';
require("dotenv").config();
const signToken = (user) => {
    return jwt.sign (
        {
            _id: user._id,
            email: user.email, 
            password: user.password, 
        },
        process.env.JWT_KEY,
        {
        expiresIn: '30d',
    }
    );
};

export  { signToken }
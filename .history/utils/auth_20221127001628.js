import jwt from 'jsonwebtoken';

const signToken = (user) => {
    return jwt.sign (
        {
            _id: user._id,
            email: user.email, 
            password: user.password, 
        },
        process.env.JWT_SECRET, 
        {
        expiresIn: '30d',
    }
    );
};

export  { signToken }
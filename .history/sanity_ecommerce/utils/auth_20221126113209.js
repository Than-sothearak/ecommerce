import jwt from 'jsonwebtoken';

const signToken = (user) => {
    retrun jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

export { signToken }
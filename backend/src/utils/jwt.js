import jwt from 'jsonwebtoken';

export const generateAccessToken = (userID) => {
    return jwt.sign({id: userID},
        process.env.JWT_ACCESS_SECRET,
        {expiresIn: process.env.ACCESS_TOKEN_EXPIRES}
    );
};

export const generateRefreshToken = (userID)=>{
    return jwt.sign({id: userID},
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: process.env.REFRESH_TOKEN_EXPIRES}
    );
};

export const verifyAccessToken = (token)=>{
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
};
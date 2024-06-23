import jwt from 'jsonwebtoken';

export const setToken = (user) => {
    return jwt.sign(user, process.env.SEC_KEY);
}

export const getToken = (token) => {
    if(!token) return null;
    return jwt.verify(token, process.env.SEC_KEY);
}
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        const err = new Error('No token provided');
        err.status = 401;
        next(err);
        return;
    }
    const jwtToken = authHeader.split(' ')[1];
    // Se verifica token
    jsonwebtoken_1.default.verify(jwtToken, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            const error = new Error('invalid token');
            error.status = 401;
            next(error);
            return;
        }
        req.userId = payload.id;
        next();
    });
};

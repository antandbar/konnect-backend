'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginsController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginsBo_1 = require("../bos/loginsBo");
class LoginsController {
    postJWT(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield loginsBo_1.loginsBo.postJWT(email, password);
                jsonwebtoken_1.default.sign({ id: user.dataValues.id }, process.env.JWT_SECRET, {
                    expiresIn: '2d',
                }, (err, jwtToken) => {
                    if (err) {
                        next(err);
                        return;
                    }
                    res.status(200).json({ token: jwtToken });
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.loginsController = new LoginsController();

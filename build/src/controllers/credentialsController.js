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
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialsController = void 0;
class CredentialsController {
    // Se recuperan datos de usuario
    getCredentials(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const credentials = {
                    userId: req.userId,
                    userName: req.userName,
                    email: req.email
                };
                res.status(200).json({ result: credentials });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.credentialsController = new CredentialsController();

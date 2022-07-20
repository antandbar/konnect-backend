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
exports.countsController = void 0;
const countsBo_1 = require("../bos/countsBo");
class CountsController {
    getCountSignedup(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const counts = yield countsBo_1.countsBo.getCountSignedup(req.params.activityId);
                res.status(200).json({ result: counts });
            }
            catch (error) {
                next(error);
            }
        });
    }
    getCountInterested(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const counts = yield countsBo_1.countsBo.getCountInterested(req.params.activityId);
                res.status(200).json({ result: counts });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.countsController = new CountsController();

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
exports.trackingController = void 0;
const trackingBo_1 = require("../bos/trackingBo");
class TrackingController {
    getTracking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const trakings = yield trackingBo_1.trackingBo.getTracking();
            res.status(200).json({ results: trakings });
        });
    }
}
exports.trackingController = new TrackingController();

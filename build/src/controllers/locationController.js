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
exports.locationController = void 0;
const locationBo_1 = require("../bos/locationBo");
class LocationController {
    getLocation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const location = yield locationBo_1.locationBo.getLocation();
            res.status(200).json({ results: location });
        });
    }
    postLocation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const location = yield locationBo_1.locationBo.postLocation(data);
            res.status(200).json({ results: location });
        });
    }
}
exports.locationController = new LocationController();

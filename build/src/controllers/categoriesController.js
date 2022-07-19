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
exports.categoryController = void 0;
const categoriesBo_1 = require("../bos/categoriesBo");
class CategoryController {
    getCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const activity = yield categoriesBo_1.categoryBo.getCategory();
                res.status(200).json({ results: activity });
            }
            catch (error) {
                next(error);
            }
        });
    }
    postCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const category = yield categoriesBo_1.categoryBo.postCategory(data);
                res.status(201).json({ results: category });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.categoryController = new CategoryController();

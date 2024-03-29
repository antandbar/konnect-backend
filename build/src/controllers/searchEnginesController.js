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
exports.searchEnginesController = void 0;
const SearchEnginesBo_1 = require("../bos/SearchEnginesBo");
class SearchEnginesController {
    getSearchEngines(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const searchEngines = yield SearchEnginesBo_1.searchEnginesBo.getsearchEngines();
                res.status(200).json({ results: searchEngines });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.searchEnginesController = new SearchEnginesController();

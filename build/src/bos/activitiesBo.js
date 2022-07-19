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
exports.activitiessBo = void 0;
const Activity_1 = __importDefault(require("../models/Activity"));
const Location_1 = __importDefault(require("../models/Location"));
const Category_1 = __importDefault(require("../models/Category"));
class ActivitiessBo {
    getActivities(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            // Se utilizan filtros para filtrar las actividades
            const activities = yield Activity_1.default.findAll({
                where: filters,
                attributes: {
                    exclude: ['locationId', 'categoryId'],
                },
                include: [
                    {
                        model: Location_1.default,
                    },
                    {
                        model: Category_1.default,
                    },
                ],
            });
            return activities;
        });
    }
    getActivityDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const activities = yield Activity_1.default.findAll({
                where: {
                    id: id,
                },
                attributes: {
                    exclude: ['locationId', 'categoryId'],
                },
                include: [
                    {
                        model: Location_1.default,
                    },
                    {
                        model: Category_1.default,
                    },
                ],
            });
            return activities;
        });
    }
    postActivities(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const activity = yield Activity_1.default.create(data);
            return activity;
        });
    }
    deleteActivities(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const activity = yield Activity_1.default.destroy({
                where: {
                    id: id,
                },
            });
            return activity;
        });
    }
}
exports.activitiessBo = new ActivitiessBo();

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
exports.activitiesController = void 0;
const activitiesBo_1 = require("../bos/activitiesBo");
class ActivitiesController {
    getActivities(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryId, locationId, activityDate } = req.query;
                const filters = {};
                if (categoryId)
                    filters.categoryId = categoryId;
                if (locationId)
                    filters.locationId = locationId;
                if (activityDate)
                    filters.activityDate = activityDate;
                const activity = yield activitiesBo_1.activitiessBo.getActivities(filters);
                res.status(200).json({ results: activity });
            }
            catch (error) {
                next(error);
            }
        });
    }
    getActivityDetails(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const activity = yield activitiesBo_1.activitiessBo.getActivityDetail(req.params.id);
                res.status(200).json({ results: activity });
            }
            catch (error) {
                next(error);
            }
        });
    }
    postctivities(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    title: req.body.title,
                    description: req.body.description,
                    userLimit: req.body.userLimit,
                    activityDate: req.body.activityDate,
                    locationId: req.body.locationId,
                    place: req.body.place,
                    maxAge: req.body.maxAge,
                    minAge: req.body.minAge,
                    categoryId: req.body.categoryId,
                };
                const activity = yield activitiesBo_1.activitiessBo.postActivities(data);
                res.status(201).json({ results: activity });
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteActivities(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const activity = yield activitiesBo_1.activitiessBo.deleteActivities(req.params.id);
                res.status(200).json({ results: activity });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.activitiesController = new ActivitiesController();

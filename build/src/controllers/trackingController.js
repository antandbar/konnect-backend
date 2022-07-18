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
const trackingsBo_1 = require("../bos/trackingsBo");
class TrackingController {
    getTracking(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, activityId, userStatusId } = req.query;
                const filters = {};
                if (userId)
                    filters.userId = userId;
                if (activityId)
                    filters.activityId = activityId;
                if (userStatusId)
                    filters.userStatusId = userStatusId;
                const trakings = yield trackingsBo_1.trackingBo.getTracking(filters);
                res.status(200).json({ results: trakings });
            }
            catch (error) {
                next(error);
            }
        });
    }
    postTracking(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    userId: req.body.userId,
                    activityId: req.body.activityId,
                    userStatusId: req.body.userStatusId,
                };
                const tracking = yield trackingsBo_1.trackingBo.postTracking(data);
                res.status(201).json({ results: tracking });
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateTracking(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    userId: req.body.userId,
                    activityId: req.body.activityId,
                    userStatusId: req.body.userStatusId,
                };
                const tracking = yield trackingsBo_1.trackingBo.updateTracking(req.params.id, data);
                res.status(200).json({ results: tracking });
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteTracking(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tracking = yield trackingsBo_1.trackingBo.deleteTracking(req.params.id);
                res.status(200).json({ results: tracking });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.trackingController = new TrackingController();

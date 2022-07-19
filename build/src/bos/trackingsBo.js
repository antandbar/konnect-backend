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
exports.trackingBo = void 0;
const Tracking_1 = __importDefault(require("../models/Tracking"));
const User_1 = __importDefault(require("../models/User"));
const Activity_1 = __importDefault(require("../models/Activity"));
const UserStatus_1 = __importDefault(require("../models/UserStatus"));
class TrackingBo {
    // Se utilizan filtros para filtrar los trakings
    getTracking(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const topics = yield Tracking_1.default.findAll({
                where: filters,
                attributes: {
                    exclude: ['userId', 'activityId', 'userStatusId'],
                },
                include: [
                    {
                        model: User_1.default,
                        attributes: { exclude: ['password'] },
                    },
                    {
                        model: Activity_1.default,
                    },
                    {
                        model: UserStatus_1.default,
                    },
                ],
            });
            return topics;
        });
    }
    postTracking(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const tracking = yield Tracking_1.default.create(data);
            return tracking;
        });
    }
    updateTracking(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const tracking = Tracking_1.default.update(data, { where: { id: id } });
            return tracking;
        });
    }
    deleteTracking(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tracking = yield Tracking_1.default.destroy({
                where: {
                    id: id,
                },
            });
            return tracking;
        });
    }
}
exports.trackingBo = new TrackingBo();

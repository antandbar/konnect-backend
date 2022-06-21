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
exports.topicsBo = void 0;
const Topic_1 = __importDefault(require("../models/Topic"));
class TopicsBo {
    getTopics() {
        return __awaiter(this, void 0, void 0, function* () {
            const topics = yield Topic_1.default.findAll();
            return topics;
        });
    }
    saveTopic(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const topic = yield Topic_1.default.create({ text: text });
            return topic;
        });
    }
}
exports.topicsBo = new TopicsBo();

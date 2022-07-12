'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SearchEngineSchema = new mongoose_1.Schema({
    search: { type: String, maxlength: 50, required: true },
    language: { type: String, maxlength: 50, required: true, index: true },
    num: Number,
    start: Number,
    location: { type: String, maxlength: 50, required: true, index: true },
    safe: { type: String, maxlength: 50 },
    userName: { type: String, maxlength: 20, required: true, index: true },
});
exports.default = (0, mongoose_1.model)('searchEngine', SearchEngineSchema);

'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger = require('morgan');
const createError = require('http-errors');
const path_1 = __importDefault(require("path"));
require("dotenv/config");
// Routes
const searchEngines_1 = __importDefault(require("./routes/searchEngines"));
const activities_1 = __importDefault(require("./routes/activities"));
const search_1 = __importDefault(require("./routes/search"));
const category_1 = __importDefault(require("./routes/category"));
const comments_1 = __importDefault(require("./routes/comments"));
const tracking_1 = __importDefault(require("./routes/tracking"));
const location_1 = __importDefault(require("./routes/location"));
const user_1 = __importDefault(require("./routes/user"));
const user_status_1 = __importDefault(require("./routes/user-status"));
// Inicializaciones
const app = (0, express_1.default)();
require('./lib/connectMogoose');
require('./lib/connectPostgresql');
//Configuracionesa
app.set('port', process.env.PORT || 3000);
// Middelwares
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use('/apiv1/searchengines', searchEngines_1.default);
app.use('/apiv1/activities', activities_1.default);
app.use('/apiv1/search', search_1.default);
app.use('/apiv1/category', category_1.default);
app.use('/apiv1/comments', comments_1.default);
app.use('/apiv1/tracking', tracking_1.default);
app.use('/apiv1/location', location_1.default);
app.use('/apiv1/user-status', user_status_1.default);
app.use('/apiv1/user', user_1.default);
// Prueba de rama develop
// Estaticos
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Arrancar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // error
    res.status(err.status || 500);
    /* res.json('error'); */
    res.json({ error: err.message });
});

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
// Inicializaciones
const app = (0, express_1.default)();
require('./lib/connectMogoose');
//require('./lib/connectPostgresql');
//Configuracionesa
app.set('port', process.env.PORT || 3000);
// Middelwares
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use('/apiv1/searchengines', searchEngines_1.default);
/* app.use('/apiv1/activities', ActivitiesRoutes);
app.use('/apiv1/search', SearchRoutes);
app.use('/apiv1/category', CategoryRoutes);
app.use('/apiv1/comments', CommentRoutes);
app.use('/apiv1/tracking', TrakingRoutes);
app.use('/apiv1/location', LocationRoutes);
app.use('/apiv1/user-status', UserStatusRoutes);
app.use('/apiv1/user', UserRoutes); */
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

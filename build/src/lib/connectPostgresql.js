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
exports.dbPostgresqlConnection = exports.db = void 0;
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize(process.env.POSTGRESQL_DATABASE, process.env.POSTGRESQL_USER, process.env.POSTGRESQL_PASSWORD, {
    host: process.env.POSTGRESQL_HOST,
    dialect: 'postgres',
    // logging: false
});
exports.db = db;
const dbPostgresqlConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.authenticate();
        console.log('Database postgresql online');
        // Se sincroniza el modelo
        yield db.sync({ alter: true });
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.dbPostgresqlConnection = dbPostgresqlConnection;

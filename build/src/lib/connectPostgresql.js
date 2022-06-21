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
const { Sequelize } = require('sequelize');
const db = new Sequelize(process.env.POSTGRESQL_DATABASE, process.env.POSTGRESQL_USER, process.env.POSTGRESQL_PASSWORD, {
    host: process.env.POSTGRESQL_HOST,
    dialect: 'postgres',
    // logging: false
});
const dbPostgresqlConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.authenticate();
        console.log('Database postgresql online');
        // Se sincroniza el modelo
        yield db.sync();
    }
    catch (error) {
        throw new Error(error);
    }
});
dbPostgresqlConnection();
module.exports = {
    db
};

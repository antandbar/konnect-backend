'use strict';

const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.POSTGRESQL_DATABASE,process.env.POSTGRESQL_USER,process.env.POSTGRESQL_PASSWORD, {
    host: process.env.POSTGRESQL_HOST,
    dialect: 'postgres',
    // logging: false
});


const dbPostgresqlConnection = async () => {

    try {
        
        await db.authenticate();
        console.log('Database postgresql online');

        // Se sincroniza el modelo
        await db.sync();


    } catch (error:any) {
        throw new Error( error );
    }
} 

dbPostgresqlConnection();

module.exports = {
    db
}



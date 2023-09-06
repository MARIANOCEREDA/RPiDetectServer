import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import config from '../config/index.js';
import { setUpModels } from './models/index.js';
import createLogger from '../config/logger/logger.js';

const logger = createLogger('sqlize-config-service')

const USERNAME = encodeURIComponent(config.mysql.dbUsername); //Enruteamos el usuario
const PASSWORD = encodeURIComponent(config.mysql.dbPassword); //enruteamos la contraseña

const port = config.mysql.port
const host = config.mysql.dbHost
const dbName = config.mysql.dbName

const URI = `mysql://${USERNAME}:${PASSWORD}@${host}:${port}/${dbName}`;

logger.info("Database name: " + config.mysql.dbName)
logger.info("Package table name: " + config.mysql.dbPackageTableName)
logger.info("Package table name: " + config.mysql.dbUsername)

const options = {
    dialect:'mysql',
    logging:false // Needs to be true in prod
}

const sqlize = new Sequelize(URI, options);

setUpModels(sqlize);

export { sqlize }
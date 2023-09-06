import dotenv from 'dotenv';
dotenv.config();

export default {
    env:'production',
    serverPort:process.env.SERVER_PORT || 5001,
    mysql:{
        port:3306,
        dbName:'sql10644878',
        dbHost:'sql10.freemysqlhosting.net',
        dbPackageTableName:'package',
        dbPassword:process.env.MYSQL_DB_PASSWORD,
        dbUsername:process.env.MYSQL_DB_USERNAME,
        usersTableName:'users',
        deviceTableName:'devices'
    }
}
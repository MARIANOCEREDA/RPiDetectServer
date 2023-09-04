
export default {
    env:'production',
    serverPort:process.env.SERVER_PORT || 3001,
    mysql:{
        port:3306,
        dbName:'tesis',
        dbHost:'localhost',
        dbPackageTableName:'package',
        dbPassword:process.env.MYSQL_DB_PASSWORD,
        dbUsername:process.env.MYSQL_DB_USERNAME,
        usersTableName:'users',
        deviceTableName:'devices'
    }
}
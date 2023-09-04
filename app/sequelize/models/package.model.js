import config from '../../config/index.js'
import { Model, DataTypes } from 'sequelize'
import createLogger from '../../config/logger/logger.js';

const logger = createLogger('package-model')

const PACKAGE_TABLE_NAME = config.mysql.dbPackageTableName

const PackageModel = {

    id:{
        field:'id_package',
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },

    packageNumber:{
        field:'package_number',
        allowNull:false,
        type:DataTypes.INTEGER
    },

    sticksAmount:{
        field:'sticks_amount',
        allowNull:false,
        type:DataTypes.INTEGER
    },

    stickType:{
        field:'stick_type',
        allowNull:false,
        type:DataTypes.STRING
    },

    averageDiameter:{
        field:'average_diameter',
        allowNull:false,
        type:DataTypes.DOUBLE
    },

    createdAt:{
        field:'created_at',
        allowNull:false,
        type:DataTypes.TIME,
        defaultValue:DataTypes.NOW
    },

    updatedAt:{
        field:'updated_at',
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW
    }

}

class Package extends Model {

    static config(sequelize) {
        return{
            sequelize,
            tableName:PACKAGE_TABLE_NAME,
            modelName:'Package',
            timestamps:false
        }
    }

}

export { PackageModel, PACKAGE_TABLE_NAME, Package }

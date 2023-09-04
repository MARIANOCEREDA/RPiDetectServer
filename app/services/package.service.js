import dotenv from 'dotenv';
dotenv.config();
import { sqlize } from '../sequelize/sequelize.js';
import createLogger from '../config/logger/logger.js';
import createError from 'http-errors'

const logger = createLogger('package-service')

class PackageService{

    constructor(){
        this.models = sqlize.models
        this.packageModel = this.models.Package
    }

    findOne = async () => {

    }

    findAll = async () => {

        const packages = await this.packageModel.findAll()

        if(!packages){
            throw createError(404, 'Packages not found.')
        }

        if(packages === null){
            throw createError(500, 'Not able to connect to database')
        }

        return packages
        
    }

    create = async (packageData) => {

        logger.debug("Incomming Package data: " + packageData)

        const packages = await this.packageModel.findOne({
            where:{ packageNumber:packageData.packageNumber }
        })

        logger.debug("Package Found: " + packages)

        if(packages){
            throw createError(409, "Package with number "+ packageData.packageNumber +" already exists.")
        }

        const created = await this.packageModel.create(packageData)

        if(!created){
            throw createError(500, "Error when trying to create package.")
        }

        return created

    }

    

}

export {  PackageService }
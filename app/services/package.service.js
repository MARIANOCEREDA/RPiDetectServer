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

    findOne = async (packageNumber) => {

        const pack = await this.packageModel.findOne({
            where:{packageNumber:packageNumber}
        })

        if(!pack){
            throw createError(404, 'Package not found.')
        }

        if(pack === null){
            throw createError(500, 'Not able to connect to database')
        }

        logger.info("Package Found: " + JSON.stringify(pack))

        return pack

    }

    findAll = async () => {

        const packages = await this.packageModel.findAll()

        if(!packages){
            logger.info("Not packages were found.")
            throw createError(404, 'Packages not found.')
        }

        if(packages === null){
            throw createError(500, 'Not able to connect to database')
        }

        logger.info("Number of packages found: " + packages.length)

        return packages
        
    }

    create = async (packageData) => {


        const packages = await this.packageModel.findOne({
            where:{ packageNumber:packageData.packageNumber }
        })

        if(packages){
            logger.info("Package Found: " + JSON.stringify(packages))
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
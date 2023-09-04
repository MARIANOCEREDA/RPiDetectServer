import { response } from "express";
import { PackageService } from "../services/package.service.js";
import createLogger from '../config/logger/logger.js';

const logger = createLogger('package-controller')

class PackageController{

    constructor(){
        this.packageService = new PackageService()
    }

    findAll = async (request, response, next) => {

        try{

            const foundPackages = await this.packageService.findAll()

            if(foundPackages){
                return response.status(200).json({packages:foundPackages})
            }

        }catch(error){
            next(error)
        }
        next()

    }

    findOne = async (request, response, next) => {

    }

    create = async (request, response, next) => {

        try{

            const packageData = request.body

            logger.debug("Create package incomming data: " + packageData)

            const createdPackage = await this.packageService.create(packageData)

            return response.status(200).json({package:createdPackage})

        }catch(error){
            next(error)
        }
        next()   

    }

    update = async (request, response, next) => {

    }

    delete = async (request, response, next) => {

    }

}

export { PackageController }
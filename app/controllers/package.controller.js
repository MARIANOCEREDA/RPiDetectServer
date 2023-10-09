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

    findOneByPackageNumber = async (request, response, next) => {

        try{

            const packageNumber = request.params.packageNumber

            const foundPackage = await this.packageService.findOne(packageNumber)

            if(foundPackage){
                return response.status(200).json({package:foundPackage})
            }

        }catch(error){
            next(error)
        }

        next()

    }

    create = async (request, response, next) => {

        try{

            const packageData = request.body

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
import express from 'express'
import { validatorHandler } from '../middlewares/validation.handler.js';
import { packageSchema } from '../validation/joiSchemas/create.package.schema.js';
import { PackageController } from "../controllers/package.controller.js"

class PackageRouter{

    constructor(){
        this.packageController = new PackageController()
        this.router = express.Router()
    }

    start(){

        this.router.get('/',
                        this.packageController.findAll)
        
        this.router.get('/:packageNumber',
                        this.packageController.findOneByPackageNumber)
        
        this.router.post('/',
                        validatorHandler(packageSchema, 'body'),
                        this.packageController.create)

        return this.router
    }

}

export { PackageRouter }
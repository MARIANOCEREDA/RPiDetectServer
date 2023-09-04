import express from 'express'
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
                        this.packageController.findOne)
        
        this.router.post('/',
                        this.packageController.create)

        return this.router
    }

}

export { PackageRouter }
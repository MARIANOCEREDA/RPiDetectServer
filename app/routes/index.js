import express from 'express'
import { PackageRouter  } from "./package.router.js";

function appRouter(app){

    const packageRouter = new PackageRouter()

    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/package', packageRouter.start())

}

export { appRouter }
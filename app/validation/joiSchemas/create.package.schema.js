import Joi from 'joi'

// Joi documentation: https://joi.dev/api/?v=17.9.1

export const packageSchema = Joi.object({
    packageNumber:Joi.number().integer().required(),
    sticksAmount:Joi.number().integer().required(),
    stickType:Joi.string().required(),
    averageDiameter:Joi.number().required()
})
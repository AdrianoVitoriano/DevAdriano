import {body, param} from "express-validator";

export const createSectionValidator =[
    body('title').isString().withMessage("Title is string."),
    body('description').isString().withMessage("description is string."),
    body('active').optional().isBoolean().withMessage("Active is boolean."),
]
export const updateSectionValidator =[
    param('id').isInt().withMessage("Id is required."),
    body('title').optional().isString().withMessage("Title is string."),
    body('description').optional().isString().withMessage("description is string."),
    body('active').optional().isBoolean().withMessage("Active is boolean."),
]

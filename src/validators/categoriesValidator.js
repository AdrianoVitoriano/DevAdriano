import {body, param} from "express-validator";

export const createCategoryValidator =[
    body('title').isString().withMessage("Title is required."),
    body('active').optional().isBoolean().withMessage("Active is boolean."),
]
export const updateCategoryValidator =[
    param('id').isInt().withMessage("Id is required."),
    body('title').optional().isString().withMessage("Title is string."),
    body('active').optional().isBoolean().withMessage("Active is boolean."),
]

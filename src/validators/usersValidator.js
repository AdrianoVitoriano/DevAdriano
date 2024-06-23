import {body, param} from "express-validator";

export const createUserValidator =[
    body('firstName').isString().withMessage("Name is required."),
    body('lastName').isString().withMessage("Name is required."),
    body('email').isEmail().withMessage("Email is required."),
    body('password').isString().withMessage("Password is required."),
]
export const updateUserValidator =[
    param('id').isString().withMessage("Id is required."),
    body('firstName').optional().isString().withMessage("Name is required."),
    body('lastName').optional().isString().withMessage("Name is required."),
    body('email').optional().isEmail().withMessage("Email is required."),
    body('password').optional().isString().withMessage("Password is required."),
]
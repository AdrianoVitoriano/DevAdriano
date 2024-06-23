import {body, param} from "express-validator";

export const createPostValidator =[
    body('title').isString().withMessage("Title is required."),
    body('content').isString().withMessage("Content is required."),
    body('published').isBoolean().withMessage("Published is required."),
    body('image').optional().isString().withMessage("Image is string."),
    body('authorId').isString().withMessage("Author id is required."),
    body('sectionId').isInt().withMessage("Section id is required."),
]
export const updatePostValidator =[
    param('id').isInt().withMessage("Id is required."),
    body('title').optional().isString().withMessage("Title is string."),
    body('content').optional().isString().withMessage("Content is string."),
    body('published').optional().isBoolean().withMessage("Published is boolean."),
    body('image').optional().isString().withMessage("Image is string."),
    body('authorId').optional().isString().withMessage("Author id is string."),
    body('sectionId').optional().isInt().withMessage("Section id is integer."),
]

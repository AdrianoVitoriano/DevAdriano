import {body, param} from "express-validator";

export const createCommentValidator =[
    param('postId').isInt().withMessage("PostId is required."),
    body('authorId').isString().withMessage("AuthorId is required."),
    body('content').isString().withMessage("Content is required."),
    body('deleted').optional().isBoolean().withMessage("Deleted is boolean."),
]
export const updateCommentValidator =[
    param('id').isInt().withMessage("Id is required."),
    body('authorId').optional().isString().withMessage("AuthorId is string."),
    body('content').isString().withMessage("Content is string."),
    body('deleted').optional().isBoolean().withMessage("Deleted is boolean."),
]
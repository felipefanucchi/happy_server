import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, _, response, __) => {
    console.error(error);

    return response
        .status(500)
        .json({
            message: 'Internal Server Error'
        });
};

export default errorHandler;
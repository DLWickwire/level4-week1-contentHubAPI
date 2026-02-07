export function errorHandler(err, _req, res, _next){
    console.log(err);

    res.status(500).json({
        error: {
            message: 'Internal Server Error'
        },
    });
}
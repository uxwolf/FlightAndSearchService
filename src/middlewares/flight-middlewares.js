const { ClientErrorCodes } = require('../utils/error-codes');

const validateCreateFlight =  (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            message : 'Invalid req body to create the flight',
            err : 'Missing the mandotory informations to create the flight'
        });

    }
    next();
}

module.exports = {
    validateCreateFlight
}
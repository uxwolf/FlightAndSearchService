const { FlightRepository , AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService{

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw new Error('Arrival time cannot be less than departure time');
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("something wrong happened in service layer");
            throw {error};
        }
    }
    async getAllFlightData(data){
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("something wrong happened in service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;

/**
 * {
 *  flightNumber,
 *  airplaneId,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price,
 *  totalSeats -> airplane
 * }
 */
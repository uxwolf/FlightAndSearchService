const { CityRepository } = require("../repository/index");

class CityService {

    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        }
        catch(error){
            console.log("something wrong happended in service layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            const response = this.CityRepository.deleteCity(cityId);
            return response;
        }
        catch(error){
            console.log("something wrong happended in service layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = this.CityRepository.updateCity(cityId,data)
            return city;
        }catch(error){
            console.log("something wrong happended in repository layer");
            throw(error);
        }
    }

    async getCity(cityId){
        try{
            const city = this.CityRepository.getCity(cityId);
            return city;
        }catch(error){
            console.log("something wrong happended in repository layer");
            throw(error);
        }
    }
}

module.exports = CityService;
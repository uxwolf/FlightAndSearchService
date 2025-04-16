const { CityRepository } = require("../repository/index");

class CityService {

    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        }
        catch(error){
            console.log("something wrong happended in service layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            const response = this.cityRepository.deleteCity(cityId);
            return response;
        }
        catch(error){
            console.log("something wrong happended in service layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = this.cityRepository.updateCity(cityId,data)
            return city;
        }catch(error){
            console.log("something wrong happended in repository layer");
            throw(error);
        }
    }

    async getCity(cityId){
        try{
            const city = this.cityRepository.getCity(cityId);
            return city;
        }catch(error){
            console.log("something wrong happended in repository layer");
            throw(error);
        }
    }
}
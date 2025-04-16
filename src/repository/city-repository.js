const { City } = require("../models/index");

class CityRepository{
    
    async createCity({ name }){
        try {
            const City = await City.create({ name });
            return City;
        }
        catch(error){
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where : {
                    id : cityId
                }
            })
        }
        catch(error){
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await City.update(data,{
                where: {
                    id:cityId
                }
            });
            return city;
        }catch(error){
            console.log("something wrong happended in repository layer");
            throw(error);
        }
    }

    async getCity(cityId){
        try{
            const city = City.findbyPK(cityId);
            return city;
        }catch(error){
            console.log("something wrong happended in repository layer");
            throw(error);
        }
    }
}

module.exports = CityRepository;
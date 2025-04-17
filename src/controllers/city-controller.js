const { CityService, CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : 'Successfully created a city'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create the city',
            err : error
        });
    }
}

const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.param.id);
        return res.status(201).json({
            data : response,
            success : true,
            message : 'Successfully deleted a city'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to delete the city',
            err : error
        });
    } 
}

const get = async (req,res) => {
    try {
        const city = await cityService.getCity(req.param.id);
        return res.status(201).json({
            data : city,
            success : true,
            message : 'Successfully get a city'
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,  
            message : 'Not able to get the city',
            err : error
        });
    }
}

const update = async (req,res) => {
    try {
        const city = await cityService.updateCity(req.param.id,req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : 'Successfully updated a city'
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,  
            message : 'Not able to update the city',
            err : error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}
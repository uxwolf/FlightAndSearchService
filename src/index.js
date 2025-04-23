const express = require("express");
const bodyParser = require("body-parser");
const ApiRoutes = require('./routes/index')
const db = require('./models/index');
// const {Airplane} = require('./models/index');

const { PORT } = require('./config/serverConfig');


const setupAndStartServer = async ()=>{

    //create express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',ApiRoutes); 

    app.listen(PORT , async ()=>{
        console.log(`server started at port: ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
        // await Airplane.create({
        //     modelNumber: 'Bombardier CRJ'
        // })
    });
}

setupAndStartServer();
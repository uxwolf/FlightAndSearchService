const express = require("express");
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async ()=>{
    //create express object
    const app = express();
    app.listen(PORT , ()=>{
        console.log(`server started at port: ${PORT}`);
    });
}

setupAndStartServer();
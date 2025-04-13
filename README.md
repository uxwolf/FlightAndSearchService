# welcome to  Flight Service
 
 ## Project setup
 - clone the project on your local.
 - Execute `npm install` on the same path as your root directory of the downloaded project.
 - Create a `.env` file in the root directory and add the following environment variables
  - `PORT=3000`
 - Inside the `src/config` folder create a new file `config.json` and add the following piece of json

 ```


 {
  "development": {
    "username": <YOUT_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
    }
 }


 ```


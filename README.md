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
 - Once you've added your db config as listed above, go to the src folder from the terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate `

## Database design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight is belong to the airplane but one airplane can be use in multiple flight
  - A city belongs to many airports but one airport belongs to a city
  - One airport can have multiple flights but a flight belongs to one airport

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
     Relationship -> One City can have many airports and Airport belong to a City(One to many)
```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:Integer

```

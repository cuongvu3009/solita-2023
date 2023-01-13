# Helsinki city bike app (Dev Academy pre-assignment)

1. Fullname: Vu Duc Cuong
2. Email: cuongvu3009@gmail.com
3. Phone: +358465339075
4. Linkedin: https://www.linkedin.com/in/cuong-vu-duc/

## Requirements

Install Node.js 18.0.0 or later version
Install PostgreSQL 13.0.0 or later version

## Run application on localhost

### To start server

1. Run 'yarn' to install neccesary packages
2. Add '.env' file following .env.example
3. Run 'yarn watch' to run the server

### To start client

1. Run 'yarn' to install neccesary packages
2. Add '.env' file following .env.example (if exist)
3. Run 'yarn start' to run the client

## Functional features

### Data import

[x] Import data from the CSV files to a database or in-memory storage <br>
[x] Validate data before importing <br>
[ ] Don't import journeys that lasted for less than ten seconds <br>
[ ] Don't import journeys that covered distances shorter than 10 meters <br>

### Journey list view

[x] List journeys <br>
[x] For each journey show departure and return stations, covered distance in kilometers and duration in minutes <br>
[x] Pagination <br>
[x] Ordering per column <br>
[x] Searching <br>
[x] Filtering<br>

### Station list

[x] List all the stations<br>
[x] Pagination<br>
[x] Ordering per column<br>
[x] Filtering<br>
[x] Searching<br>

### Single station view

[x] Station name<br>
[x] Station address<br>
[x] Station location on the map<br>
[ ] Total number of journeys starting from the station<br>
[ ] Total number of journeys ending at the station<br>
[ ] The average distance of a journey starting from the station<br>
[ ] The average distance of a journey ending at the station<br>
[ ] Top 5 most popular return stations for journeys starting from the station<br>
[ ] Top 5 most popular departure stations for journeys ending at the station<br>
[ ] Ability to filter all the calculations per month<br>
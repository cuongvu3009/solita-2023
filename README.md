# Helsinki city bike app (Dev Academy pre-assignment)

1. Fullname: Vu Duc Cuong
2. Email: cuongvu3009@gmail.com
3. Phone: +358465339075
4. Linkedin: https://www.linkedin.com/in/cuong-vu-duc/

## The exercise

Install Node.js 18.0.0 or later version

## Stuff to do

### To start server

1. Run 'yarn' to install neccesary packages
2. Add '.env' file following .env.example
3. Run 'yarn watch' to run the server

### To start client

1. Run 'yarn' to install neccesary packages
2. Add '.env' file following .env.example
3. Run 'yarn start' to run the server

## Functional features

### Data import

[x] Import data from the CSV files to a database or in-memory storage
[x] Validate data before importing
[ ] Don't import journeys that lasted for less than ten seconds
[ ] Don't import journeys that covered distances shorter than 10 meters

### Journey list view

[x] List journeys
[x] For each journey show departure and return stations, covered distance in kilometers and duration in minutes
[x] Pagination
[x] Ordering per column
[x] Searching
[x] Filtering

### Station list

[x] List all the stations
[x] Pagination
[x] Ordering per column
[x] Filtering
[x] Searching

### Single station view

[x] Station name
[x] Station address
[x] Station location on the map
[ ] Total number of journeys starting from the station
[ ] Total number of journeys ending at the station
[ ] The average distance of a journey starting from the station
[ ] The average distance of a journey ending at the station
[ ] Top 5 most popular return stations for journeys starting from the station
[ ] Top 5 most popular departure stations for journeys ending at the station
[ ] Ability to filter all the calculations per month

CREATE DATABASE solita

-- cannot preferences stations for return returnStation_id because there is some station does not exist, will fix this one soon.
CREATE TABLE journeys (
	departureTime DATE  NOT NULL,
	returnTime DATE  NOT NULL,
	departureStation_id BIGINT NOT NULL,
	departureStation_name VARCHAR(100) NOT NULL,
	returnStation_id BIGINT NOT NULL,
	returnStation_name VARCHAR(100) NOT NULL,
	distanceCoveredInMeters NUMERIC NOT NULL,
	durationSeconds NUMERIC NOT NULL
);

CREATE TABLE stations (
	id BIGSERIAL,
	station_id BIGINT PRIMARY KEY,
	stationName VARCHAR(100) NOT NULL,
	Namn VARCHAR(100),
	Name VARCHAR(100),
	Osoite VARCHAR(100),
	stationAddress VARCHAR(100) NOT NULL,
	Kaupunki VARCHAR(100),
	Stad VARCHAR(100),
	Operaattor VARCHAR(100),
	Kapasiteet VARCHAR(100),
	x VARCHAR(100),
	y VARCHAR(100)
);




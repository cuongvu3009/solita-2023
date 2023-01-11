CREATE DATABASE solita

CREATE TABLE journeys (
	journey_id BIGSERIAL PRIMARY KEY,
	departureTime Date NOT NULL,
	returnTime Date NOT NULL,
	distanceCoveredInMeters INT NOT NULL,
	durationSeconds INT NOT NULL,
	departureStation_id INT NOT NULL REFERENCES stations(station_id),
	returnStation_id INT NOT NULL REFERENCES stations(station_id)
);

CREATE TABLE stations (
	station_id BIGSERIAL PRIMARY KEY,
	stationName VARCHAR(100) NOT NULL,
	stationAddress VARCHAR(100) NOT NULL,
)
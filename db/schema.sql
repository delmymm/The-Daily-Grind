DROP DATABASE IF EXISTS daily_grind_db;
CREATE DATABASE daily_grind_db;

USE daily_grind_db;

CREATE TABLE drink (
store_name VARCHAR(100) NOT NULL,
drink_name VARCHAR(50) NOT NULL,
drink_description VARCHAR(100) NOT NULL,
drink_type VARCHAR(100) NOT NULL,
PRIMARY KEY (drink_name)
);

CREATE TABLE location (
store_name VARCHAR(100) NOT NULL,
street_address VARCHAR(100) NOT NULL,
city VARCHAR(50) NOT NULL,  
state_and_zip VARCHAR(50) NOT NULL,
phone VARCHAR(50) NOT NULL,
website VARCHAR(50) NOT NULL,
PRIMARY KEY (store_name)
);


SELECT * FROM drink;
select * from location;
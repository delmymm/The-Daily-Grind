DROP DATABASE IF EXISTS daily_grind_db;
CREATE DATABASE daily_grind__db;

USE daily_grind_db;

CREATE TABLE drinks (
    drink_name VARCHAR(100) NULL,
    explaination VARCHAR(1000) NULL,
    drink_type VARCHAR(100) NULL,
    drink_id INT NOT NULL,
    store_name VARCHAR(100) NULL,
    store_location VARCHAR(500) NULL,
    store_phone INT NOT NULL
    PRIMARY KEY (drink_id)
);
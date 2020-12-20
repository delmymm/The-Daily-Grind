DROP DATABASE IF EXISTS daily_grind_db;
CREATE DATABASE daily_grind_db;

/* USE daily_grind_db;

/*CREATE TABLE drink (
    id INT NOT NULL AUTO_INCREMENT,
    drink_name VARCHAR(100) NULL,
    explaination VARCHAR(1000) NULL,
    drink_type VARCHAR(100) NULL,
    store_name VARCHAR(100) NULL,
    store_location VARCHAR(500) NULL,
    store_phone INT NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM drink;

CREATE TABLE store_location (
    id INT NOT NULL AUTO_INCREMENT,
    store_name VARCHAR(100) NULL,
    street_address VARCHAR(1000) NULL,
    city VARCHAR(100) NULL,
    state_and_zip VARCHAR(100) NULL,
    phone VARCHAR(500) NULL,
    website INT NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM store_location;
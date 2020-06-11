DROP DATABASE IF EXISTS burger;
CREATE DATABASE burger;
USE burger;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT
    , burger_name varchar(255) NOT NULL
    , devoured BOOLEAN DEFAULT FALSE
    , PRIMARY KEY (id)
);
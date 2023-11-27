DROP DATABASE IF EXISTS bussiness_db;
CREATE DATABASE bussiness_db;

USE bussiness_db;

CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id int UNSIGNED NOT NULL,
    INDEX dep_ind (department_id),
    CONSTRAINT fk_department
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE CASCADE
);

--  didnt see in recording
-- CREATE TABLE employee(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     role_id int,
--     manager_id int,
--     FOREIGN KEY (role_id)
--     REFERENCES role(department_id)
--     ON DELETE SET NULL
-- );


-- UNIQUE : Ensures that all values in a column are different
-- UNSIGNED : Allows the variable to not be a negative value
-- INDEX : 
--  dep_ind : index that is created
-- CONSTRAINT :
-- fk_department :
-- 02-06-20 
-- Author: Mirey Morales
CREATE DATABASE IF NOT EXISTS pet_store_mirey_morales;

-- 
USE pet_store_mirey_morales;

-- 
CREATE TABLE pet_products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(128) NOT NULL,
  tag VARCHAR(64)
);

--
INSERT INTO pet_products (name, tag)
VALUES 
(
  "Toy",
  "Toy for dog"
),
(
  "Leash",
  "Leash for big dogs"
),
(
  "Cat Food",
  "Food for your cat"
),
(
  "Dog shirt",
  "Cute shirt for your doggie"
);

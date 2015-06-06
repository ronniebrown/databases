CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20),
  roomname VARCHAR(20),
  message VARCHAR(150)
);

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20)
);

CREATE TABLE roomname (
  room_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  roomname VARCHAR(20)
);

-- CREATE TABLE mid (
--   room_id,
--   user_id
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


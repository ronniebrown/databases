CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  -- username VARCHAR(20),
  -- roomname VARCHAR(20),
  userid INT NOT NULL,
  message VARCHAR(150) NOT NULL,
  roomname VARCHAR(20),
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY (ID)
);

-- CREATE TABLE roomname (
--   room_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   roomname VARCHAR(20)
-- );

-- CREATE TABLE mid (
--   room_id,
--   user_id
-- );

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int primary key not null, 
  username char(255), 
  messages char(255), 
  roomname char(255)
);


INSERT INTO messages (id, username, messages, roomname) VALUES (1, 'alana', 'this is working', 'lobby');
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


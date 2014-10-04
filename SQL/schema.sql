CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE messages (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Text` VARCHAR(150) NULL DEFAULT NULL,
  `room` VARCHAR(40) NOT NULL DEFAULT 'lobby',
  `user` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(150) NULL DEFAULT NULL,
  `color` VARCHAR(40) NOT NULL DEFAULT 'green',
  PRIMARY KEY (`id`)
);



/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/





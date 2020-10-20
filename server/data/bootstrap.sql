SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `shirts`;
CREATE TABLE `shirts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `color` enum('white', 'grey', 'blue') NOT NULL,
  `size` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `shirts` (`id`, `name`, `color`, `size`) VALUES
(1,	'Hard Rock Cafe',	'grey', 4),
(2,	'Tommy Hilfiger',	'blue', 5),
(3,	'Adidas',	'white', 5);

DROP TABLE IF EXISTS `pants`;
CREATE TABLE `pants` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `color` varchar(64) NOT NULL,
  `width` int(3) unsigned NOT NULL,
  `length` int(3) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `pants` (`id`, `name`, `color`, `width`, `length`) VALUES
(1,	'Blue Jeans',	'blue', 32, 100),
(2,	'Camo pants',	'green', 34, 100),
(3,	'Black Jeans',	'black', 34, 100);

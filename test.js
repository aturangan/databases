-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Teachers'
-- 
-- ---

DROP TABLE IF EXISTS `Teachers`;
		
CREATE TABLE `Teachers` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` INTEGER NULL DEFAULT NULL,
  `Age` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Classes'
-- 
-- ---

DROP TABLE IF EXISTS `Classes`;
		
CREATE TABLE `Classes` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Room` INTEGER NULL DEFAULT NULL,
  `Teacher` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Classes` ADD FOREIGN KEY (Teacher) REFERENCES `Teachers` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Teachers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Classes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Teachers` (`id`,`Name`,`Age`) VALUES
-- ('','','');
-- INSERT INTO `Classes` (`id`,`Room`,`Teacher`) VALUES
-- ('','','');
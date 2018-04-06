
CREATE DATABASE jager_db;
USE jager_db;
CREATE TABLE IF NOT EXISTS `jager_db` (
  `id` int(11) NOT NULL,
  `category` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `salary` DECIMAL(65) NOT NULL,
  `skills` varchar(200) NOT NULL,
  `interesting_facts` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `jager_db` ADD PRIMARY KEY (`id`);
ALTER TABLE `jager_db` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;




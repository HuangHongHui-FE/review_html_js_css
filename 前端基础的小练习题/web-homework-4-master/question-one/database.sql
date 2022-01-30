# TODO
DROP DATABASE music_db;
CREATE music_db;

CREATE TABLE IF NOT EXISTS `artists`{
	`name` VARCHAR PRIMARY KEY,
	`phone_number` VARCHAR,
	`Country of origin, store with a 2 letter code` VARCHAR
}

CREATE TABLE IF NOT EXISTS `companies`{
	`name` VARCHAR PRIMARY KEY,
	`descriptions` VARCHAR
}
CREATE TABLE IF NOT EXISTS `companies`{
	`name` VARCHAR PRIMARY KEY,
	`number_of_sales` VARCHAR
}

CREATE TABLE IF NOT EXISTS `companies`{
	`name` VARCHAR PRIMARY KEY,
	`description` VARCHAR
}

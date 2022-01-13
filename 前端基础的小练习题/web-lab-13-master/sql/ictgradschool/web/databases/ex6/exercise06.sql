-- Answers to Exercise 6 here
-- -- Answers to Exercise 3 here
DROP TABLE IF EXISTS videos;
CREATE TABLE IF NOT EXISTS videos(
    id INT NOT NULL,
    title TEXT,
    directed TEXT,
    charge_out INT,
    members_out TEXT REFERENCES members(video_out)
);


CREATE TABLE IF NOT EXISTS members(
    video_out TEXT
);

INSERT INTO members(video_out) VALUES ("Jane");
INSERT INTO videos(id,title,directed,charge_out,members_out) VALUES
(1,'111','Peter',1961,'Jane'),
(2,'222','Jane',1954,'Jane'),
(3,'333','Kate',1945,'Jane'),
(4,'444','Temuera',1960,'Jane'),
(5,'555','Russell',1964,'Jane'),
(6,'666','Kate',1968,'Jane'),
(7,'777','Michael',1957,'Jane'),
(8,'888','Kate',1964,'Jane'),
(9,'999','Kiri',1944,'Jane'),
(10,'101010','Apirana',1996,'Jane'),
(11,'111111','Kate',1979,'Jane'),
(12,'121212','Kimbra',1111,'Jane'),
(13,'131313','Apirana',1958,'Jane'),
(14,'141414','Anika',1980,'Jane'),
(15,'151515','Apirana',1976,'Jane'),
(16,'161616','Ernest',1871,'Jane'),
(17,'171717','Apirana',1874,'Jane');
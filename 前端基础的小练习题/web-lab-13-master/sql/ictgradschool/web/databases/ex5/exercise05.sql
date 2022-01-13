-- Answers to Exercise 5 here
DROP TABLE IF EXISTS usersfive;
CREATE TABLE IF NOT EXISTS usersfive (
  id INT NOT NULL,
  username VARCHAR(64),
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  PRIMARY KEY (username)
);

INSERT INTO usersfive VALUES (1, 'programmer1', 'Peter', '111', 'bill@microsoft.com');
INSERT INTO usersfive VALUES (2, 'programmer2', 'Pete', '222', 'bill@microsoft.com');
INSERT INTO usersfive VALUES (3, 'programmer3', '333', 'Peterson', 'bill@microsoft.com');
INSERT INTO usersfive VALUES (4, 'programmer4', 'Aa', '444', 'bill@microsoft.com');
INSERT INTO usersfive VALUES (5, 'programmer5', 'Bb','555', 'bill@microsoft.com');
INSERT INTO usersfive VALUES (6, 'programmer6', 'Cc', '666', 'bill@microsoft.com');
INSERT INTO usersfive VALUES (7, 'programmer7', 'Dd', '777', 'bill@microsoft.com');
INSERT INTO usersfive VALUES (8, 'programmer8', 'Ee', '888', 'bill@microsoft.com');
INSERT INTO usersfive VALUES (9, 'programmer9', 'Ff', '999', 'bill@microsoft.com');
INSERT INTO usersfive VALUES (10,'programmer10', 'Gg', '10', 'bill@microsoft.com');
INSERT INTO usersfive VALUES (11, 'programmer11','Hh', '11', 'bill@microsoft.com');
-- 这将会报错 Duplicate entry 'programmer11' for key 'PRIMARY'
INSERT INTO usersfive VALUES (12, 'programmer11','Hh', '11', 'bill@microsoft.com');

SELECT * FROM usersfive;
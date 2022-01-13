-- Answers to Exercise 2 here
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL,
  username TEXT,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  PRIMARY KEY (id)
);

INSERT INTO users VALUES (1, 'programmer1', 'Peter', '111', 'bill@microsoft.com');
INSERT INTO users VALUES (2, 'programmer2', 'Pete', '222', 'bill@microsoft.com');
INSERT INTO users VALUES (3, 'programmer3', '333', 'Peterson', 'bill@microsoft.com');
INSERT INTO users VALUES (4, 'programmer4', 'Aa', '444', 'bill@microsoft.com');
INSERT INTO users VALUES (5, 'programmer5', 'Bb','555', 'bill@microsoft.com');
INSERT INTO users VALUES (6, 'programmer6', 'Cc', '666', 'bill@microsoft.com');
INSERT INTO users VALUES (7, 'programmer7', 'Dd', '777', 'bill@microsoft.com');
INSERT INTO users VALUES (8, 'programmer8', 'Ee', '888', 'bill@microsoft.com');
INSERT INTO users VALUES (9, 'programmer9', 'Ff', '999', 'bill@microsoft.com');
INSERT INTO users VALUES (10,'programmer10', 'Gg', '10', 'bill@microsoft.com');
INSERT INTO users VALUES (11, 'programmer11','Hh', '11', 'bill@microsoft.com');

SELECT * FROM users;
-- Answers to Exercise 7 here

DROP TABLE IF EXISTS articleComments;

CREATE TABLE IF NOT EXISTS articleComments (
  id INT AUTO_INCREMENT,
  comment TEXT,
  PRIMARY KEY (id),
--   外键
  articlesId INT REFERENCES articles(id)
);


INSERT INTO articleComments VALUES (1,'666', 1);
INSERT INTO articleComments VALUES (2,'good', 1);
INSERT INTO articleComments VALUES (3,'great', 2);

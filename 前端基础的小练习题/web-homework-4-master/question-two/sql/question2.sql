DROP TABLE IF EXISTS practical_two_files;
CREATE TABLE IF NOT EXISTS practical_two_files (
  file_name VARCHAR(64) NOT NULL,
  file_title VARCHAR(64) NOT NULL,
  file_description TEXT NOT NULL,
  PRIMARY KEY (file_name)
);

INSERT INTO practical_two_files VALUES
  ('ace313.pdf', 'HTML & Git', 'The first web lecture of the PGCertIT programming introducing students to the basics of HTML and Git.'),
  ('daca76.pdf', 'HTML & Forms', 'A continuation of the first web lecture, this presentation investigates more HTML features.'),
  ('foo007.pdf', 'CSS1', 'Introducing Cascading Style Sheets.'),
  ('herp69.pdf', 'CSS2', 'Getting started with CSS positioning.');

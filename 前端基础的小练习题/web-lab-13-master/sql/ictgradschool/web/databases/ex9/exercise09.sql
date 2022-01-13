-- Answers to Exercise 9 here
SELECT * FROM videos;

SELECT id, directed, charge_out FROM videos;

SELECT title FROM articles;

SELECT DISTINCT directed FROM videos;

SELECT title, charge_out FROM videos WHERE charge_out <= 2;

SELECT username FROM users ORDER BY username DESC;

SELECT username FROM users WHERE username like "Pete%";

SELECT username FROM users WHERE last_name like "Pete%" or first_name like "Pete%";


-- Answers to Exercise 8 here

DELETE FROM users WHERE id = '1';

alter table users drop column email;

DROP TABLE IF EXISTS users;

UPDATE users SET last_name='张飞' WHERE id=2;

UPDATE users SET last_name=222 WHERE id=2;

UPDATE users SET id=40 WHERE last_name='888';

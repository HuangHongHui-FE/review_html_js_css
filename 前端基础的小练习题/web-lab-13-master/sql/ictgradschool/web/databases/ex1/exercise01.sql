-- This is an example SQL file that will attempt to create a table with some
-- content on your database, then retrieve some results from it. This file
-- is well documented, so make sure to read all the comments so that you can
-- understand what each step is doing

-- As you may have noticed by now, comments in SQL start with two hyphens
-- followed by a space. The space is important - if it is omitted, the line
-- may be interpreted as an instruction. Your IDE will generally notice this,
-- and draw your attention to it by attempting to highlight the line as if it
-- was SQL. Try this by removing a space from one of these commented lines,
-- and observe what your IDE does. Remember to correct this once you have
-- seen the result.

/*In addition to the single line commenting style, (most) SQL dialects
   support multi-line comments in the C/Java style. This can be useful if
   you want to write out a long winded description of something and don't
   want to manually type out the hyphens. It has the added bonus of not fussing
   the extra space following the comment marker. It should be noted that some
   dialects (MySQL included) sometimes interpret and execute code that is
   inside these multi-line comment blocks, so if you are commenting out an SQL
   statement, it is best to use the single line commenting approach. */



-- Executing your SQL within IntelliJ is a little different from what you are
-- used to. Rather than just hitting a play button and having the whole script
-- execute, you have two options.
--
-- The first is to right-click a SQL file in the `Project` pane and select
-- the `Run` option. This will prompt you to select a data source - generally
-- the default option is fine. This option will execute the entire SQL file top
-- to bottom.
--
-- The second approach is to select the statements that you would like to
-- execute using your mouse, then through the right-click menu selecting
-- `execute`. This will run just the SQL that you have selected, allowing
-- you to be precise about what to execute.



-- The `DROP TABLE` statement is an instruction to remove a specified table.
-- The table and all its contents will be deleted as long as no other table(s)
-- depend on it. This command can fail if - as mentioned above - another table
-- depends on the one being deleted, or if the table doesn't exist. To protect
-- against the former, we can ensure that tables that have dependencies are
-- dropped prior to the table(s) they depend on. To protect against the latter,
-- we can add the `IF EXISTS` qualifier to the command which will stop an error
-- being generated in the event that the table doesn't exist.
--
-- To demonstrate this behaviour, execute the command below and observe the
-- output in the console. Next, remove the `IF EXISTS` qualifier and observe
-- the difference. Once complete, remember to put the qualifier back in to
-- prevent errors later in the exercise.
DROP TABLE IF EXISTS dbtest_tableone;

CREATE TABLE IF NOT EXISTS dbtest_tableone (
  id INT NOT NULL,
  content TEXT,
  PRIMARY KEY (id)
);

-- Here we insert 6 rows of data, with each row having its own INSERT statement.
-- This is not very performant, as each INSERT has to be sent to the server
-- individually. After creating the table above, run all of these INSERTS and
-- observe the total time taken to complete the insertions.
INSERT INTO dbtest_tableone VALUES (1, 'Lorem');
INSERT INTO dbtest_tableone VALUES (2, 'Ipsum');
INSERT INTO dbtest_tableone VALUES (3, 'Dolor');
INSERT INTO dbtest_tableone VALUES (4, 'Quisquam');
INSERT INTO dbtest_tableone VALUES (5, 'Consectetur');
INSERT INTO dbtest_tableone VALUES (6, 'Amet');


-- When developing SQL, it is generally a good idea to DROP tables when running
-- the complete script prior to attempting to CREATEing the table again. This
-- will mean you lose any data in the table, but as you are in development, not
-- production, this isn't a huge concern. If we do not DROP the table before
-- trying to CREATE, you run the risk of generating an error due to the table
-- already existing.
DROP TABLE IF EXISTS dbtest_tabletwo;

CREATE TABLE IF NOT EXISTS dbtest_tabletwo (
  id INT NOT NULL AUTO_INCREMENT,
  code CHAR(2) NOT NULL,
  name VARCHAR(64),
  PRIMARY KEY (id)
);

-- Here again, we insert 6 rows of data, but this time we use a single INSERT
-- statement. Run this INSERT after creating the table above, and compare the
-- time taken to that recorded from the individual inserts.
INSERT INTO dbtest_tabletwo (code, name) VALUES
  ('NZ', 'New Zealand'),
  ('AU', 'Australia'),
  ('UK', 'United Kingdom'),
  ('DE', 'Germany'),
  ('FR', 'France'),
  ('US', 'United States of America');

-- Retrieve all the data from each table
SELECT * FROM dbtest_tableone;
SELECT * FROM dbtest_tabletwo;

-- Here we modify the dbtest_tabletwo table to add an extra boolean column. As
-- we have specified a `NOT NULL`  qualifier, we need to provide a default value
-- to initialize each row to so as not to violate that constraint..
ALTER TABLE dbtest_tabletwo
  ADD isGreat BOOL NOT NULL DEFAULT TRUE
  AFTER name;

UPDATE dbtest_tabletwo
  SET isGreat = FALSE
  WHERE code = 'US';

SELECT * FROM dbtest_tableone;
SELECT * FROM dbtest_tabletwo;


/* Use the web interface (phpmyadmin) to verify that the changes we have made
   here are present on the server.

   NOTE: Each of the two tables created here are prefixed with `dbtest_`.
   This allows us to identify what they relate to within the database. You
   should prefix all of your tables names in a similar manner as you are
   (currently) limited to a single database.

   In a production (or less controlled development environment) this would
   not be necessary as each application would keep its tables in a database
   of its own. Here unfortunately, we have to coordinate resources for many
   students, and if allowed free reign with creating databases we would rapidly
   run into naming conflicts and even potentially hurt the performance of my
   long suffering server.
*/

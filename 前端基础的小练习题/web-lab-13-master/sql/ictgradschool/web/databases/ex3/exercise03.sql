-- -- Answers to Exercise 3 here
DROP TABLE IF EXISTS customers;
CREATE TABLE IF NOT EXISTS customers(
    name TEXT,
    gender TEXT,
    year_born INT,
    joined TEXT,
    num_hires INT
);

INSERT INTO customers(name,gender,year_born,joined,num_hires) VALUES
('Peter Jackson','male',1961,'1997',17000),
('Jane Campion','female',1954,'1980',30000),
('Roger Donaldson','male',1945,'1980',12000),
('Temuera Morrison','male',1960,'1995',15500),
('Russell Crowe','male',1964,'1990',10000),
('Lucy Lawless','female',1968,'1995',5000),
('Michael Hurst','male',1957,'2000',15000),
('Andrew Niccol','male',1964,'1997',3500),
('Kiri Te Kanawa','female',1944,'1997',500),
('Lorde','female',1996,'2010',1000),
('Scribe','male',1979,'2000',5000),
('Kimbra','female',1990,'2005',7000),
('Neil Finn','male',1958,'1985',6000),
('Anika Moa','female',1980,'2000',700),
('Bic Runga','female',1976,'1995',5000),
('Ernest Rutherford','male',1871,'1930',4200),
('Kate Sheppard','female',1847,'1930',1000),
('Apirana Turupa Ngata','male',1874,'1920',3500),
('Edmund Hillary','male',1919,'1955',10000),
('Katherine Mansfield','female',1888,'1920',2000),
('Margaret Mahy','female',1936,'1985',5000),
('John Key','male',1961,'1990',20000),
('Sonny Bill Williams','male',1985,'1995',15000),
('Dan Carter','male',1982,'1990',20000),
('Bernice Mene','female',1975,'1990',30000)
DROP TABLE IF EXISTS drivers CASCADE;

-- Create passengers table
CREATE TABLE drivers (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  insurance VARCHAR(10) 
);


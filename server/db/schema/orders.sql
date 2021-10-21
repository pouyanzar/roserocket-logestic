DROP TABLE IF EXISTS orders CASCADE;

-- Create requests table
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  description TEXT NOT NULL,
  cost DECIMAL(10,2) NOT NULL,
  revenue DECIMAL(10,2) NOT NULL,
  driver_id INTEGER REFERENCES drivers(id) ON DELETE CASCADE
);
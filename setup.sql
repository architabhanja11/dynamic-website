CREATE DATABASE banner_db;

USE banner_db;

CREATE TABLE banner_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  visible BOOLEAN NOT NULL,
  description VARCHAR(255) NOT NULL,
  timer INT NOT NULL,
  link VARCHAR(255) NOT NULL
);

INSERT INTO banner_settings (visible, description, timer, link) VALUES (0, 'Welcome to our website!', 10, 'https://example.com');

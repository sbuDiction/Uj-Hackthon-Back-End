CREATE TABLE users(
id SERIAL PRIMARY KEY,
access_number TEXT, 
name TEXT,
student BOOLEAN, 
researcher BOOLEAN, 
admin BOOLEAN 
);
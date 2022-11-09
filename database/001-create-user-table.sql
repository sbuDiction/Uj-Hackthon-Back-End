CREATE TABLE users(
id SERIAL PRIMARY KEY,
name TEXT, 
role TEXT,
team_leader BOOLEAN, 
admin BOOLEAN 
);
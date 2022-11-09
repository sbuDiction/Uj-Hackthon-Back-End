CREATE TABLE project (
id SERIAL PRIMARY KEY
user_id INTEGER REFERENCES user (id) ON DELETE CASCADE ON UPDATE CASCADE,
project_name TEXT, 
start_date TEXT,
end_date TEXT
);
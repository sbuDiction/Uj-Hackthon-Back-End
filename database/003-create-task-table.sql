CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
project_id INTEGER REFERENCES project (id) ON DELETE CASCADE ON UPDATE CASCADE,
user_id INTEGER REFERENCES user (id) ON DELETE CASCADE ON UPDATE CASCADE,  
task_name TEXT,
start_date TEXT,
end_date TEXT
);
DROP DATABASE IF EXISTS lbb;

CREATE DATABASE lbb;

\c lbb;

-- NOT NULL /= unique. unique can be an empty string. Only for the first instance.; 

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR , 
  last_name VARCHAR , 
  user_name VARCHAR NOT NULL,
  email_address VARCHAR,
  sexuality VARCHAR ,
  gender VARCHAR ,
  password_digest VARCHAR , 
  password_confirm VARCHAR 
);

DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
person_name VARCHAR,
person_phone VARCHAR,
address VARCHAR,
date VARCHAR,
safe_yes VARCHAR,
birth_control VARCHAR,
last_tested VARCHAR,
last_tested_date VARCHAR,
status VARCHAR,
promiscuity VARCHAR,
extra_notes VARCHAR,
zodiac_sign VARCHAR,
rating VARCHAR,
menstruating VARCHAR
);

-- CREATE TABLE modules (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(40) ,
--   group_id INTEGER REFERENCES groups(id) ,
--   description TEXT,
--   is_private BOOLEAN 
-- );

-- CREATE TABLE topics (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(60) ,
--   module_id INTEGER REFERENCES modules(id) ,
--   description TEXT
-- );

-- CREATE TABLE articles (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(60) ,
--   topic_id INTEGER REFERENCES topics(id) 
-- );

-- CREATE TABLE sections (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(60) ,
--   article_id INTEGER REFERENCES articles(id) ,
--   section_text TEXT ,
--   video_url VARCHAR
-- );

-- CREATE TABLE collaborations (
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER REFERENCES users(id) ,
--   group_id INTEGER REFERENCES groups(id) ,
--   approved BOOLEAN ,
--   is_admin BOOLEAN 
-- );

-- INSERT INTO users (username, password_digest)
--   VALUES ('Reed', 'password'), ('Joe', 'password');

--to connect to db
-- bash
-- cd db
-- psql -f users.sql

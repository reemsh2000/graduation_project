BEGIN;

DROP TABLE IF EXISTS 
users,
healthcare_videos,
articles,
natural_ingradients,
inspirational_stories
 CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password TEXT,
    mobile TEXT,
    height FLOAT,
    weight FLOAT,
    dob DATE,
    profile_image TEXT
);
CREATE TABLE healthcare_videos(
    id SERIAL PRIMARY KEY,
    title TEXT,
    image TEXT
);
CREATE TABLE articles(
    id SERIAL PRIMARY KEY,
    title TEXT,
    content TEXT,
    image TEXT
);
CREATE TABLE natural_ingradients(
    id SERIAL PRIMARY KEY,
    name TEXT,
    calorie FLOAT,
    image TEXT
);
CREATE TABLE inspirational_stories(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title TEXT,
    content TEXT,
    image TEXT
);

CREATE TABLE Activities(
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    url TEXT NOT NULL,
    burnt_calories INTEGER,
    restrections TEXT []
);



COMMIT;
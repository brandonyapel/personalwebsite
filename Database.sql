 CREATE DATABASE personalwebsite;

CREATE TABLE BlogArticles (
	article_id serial PRIMARY KEY,
	title varchar(256),
	posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
	description varchar(256),
	article_content varchar(100000)
);

SELECT * FROM BlogArticles;
CREATE TABLE posts
(
    id INT NOT NULL AUTO_INCREMENT,
    post_date VARCHAR(30) NOT NULL,
    category VARCHAR(30) NOT NULL,
    title VARCHAR(255) NOT NULL,
    body VARCHAR(5000) NOT NULL,
    hashtags VARCHAR(250) NOT NULL DEFAULT '#eliascodes',
    PRIMARY KEY(id)
);


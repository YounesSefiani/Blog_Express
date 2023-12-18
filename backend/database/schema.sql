create table author (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname varchar(255) not null,
  lastname VARCHAR(255) NOT NULL
);

create table article(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  content longtext,
  image_src VARCHAR(255) NOT NULL,
  image_alt VARCHAR(255) NOT NULL,
  author_id INT,
  CONSTRAINT fk_article_by_author FOREIGN KEY (author_id) REFERENCES author(id) ON DELETE CASCADE 
)

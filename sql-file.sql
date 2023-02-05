CREATE DATABASE IF NOT EXISTS product;

USE product;

CREATE TABLE IF NOT EXISTS `products` (
	product_id int(11) NOT NULL AUTO_INCREMENT,
	product_name varchar(50) NOT NULL,
	CONSTRAINT PK_product_id PRIMARY KEY(product_id),
	CONSTRAINT UK_product_name UNIQUE(product_name)
);

INSERT INTO productss VALUES(1, 'Television');
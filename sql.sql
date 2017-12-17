CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
itemID INT NOT NULL AUTO_INCREMENT,
productName VARCHAR(45), 
departmentName VARCHAR(45),
price DECIMAL(7,2), 
stockQuantity INTEGER (10),
PRIMARY KEY(itemID)
);

INSERT INTO products (productName, departmentName, price, stockQuantity) 
VALUES ('Jordan', 'Shoes', 175.00, 50), 
('Nike', 'Shoes', 125.00, 350), 
('Reebok', 'Shoes', 75.00, 200), 
('Balance', 'Shoes', 95.00, 100), 
('ASOS', 'Shirts', 25.95, 250), 
('H&M', 'Shirts', 29.50, 425), 
('Express', 'Shirts', 45.25, 150), 
('Wrangler', 'Jeans', 24.50, 200), 
('Levi', 'Jeans', 55.25, 50), 
('Gap', 'Jeans', 35.50,100); 


USE bamazon;
SELECT * FROM products;
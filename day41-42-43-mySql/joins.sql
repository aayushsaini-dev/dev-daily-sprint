CREATE TABLE customers(
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100)
);

CREATE TABLE orders(
    order_id INT PRIMARY KEY,
    cutomer_id INT,
    product_name VARCHAR(100),
    quantity INT,
    FOREIGN KEY (cutomer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers (customer_id, customer_name) VALUES
(1, 'Aayush'),
(2, 'BOB'),
(3, 'Anjali'),
(4, 'David'); -- david hasn't place any orders

INSERT INTO orders(order_id, cutomer_id, product_name, quantity) VALUES
(101, 1, 'T-shirt', 2),
(102, 1, 'macbook-pro', 1),
(103, 2, 'Jacket', 1),
(104, 3, 'iPhone', 1),
(105, NULL, 'Sneakers', 2);

SELECT * FROM orders;
SELECT * FROM customers;

-- JOINS 
-- INNER JOIN  // which are common in both
SELECT c.customer_name, o.product_name, o.quantity
 FROM customers c
INNER JOIN orders o ON c.customer_id = o.cutomer_id

-- left join
SELECT c.customer_name, o.product_name, o.quantity
 FROM customers c
LEFT JOIN orders o ON c.customer_id = o.cutomer_id

-- right join
SELECT c.customer_name, o.product_name, o.quantity
 FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.cutomer_id

-- outer join
SELECT c.customer_name, o.product_name, o.quantity
 FROM customers c
FULL OUTER JOIN orders o ON c.customer_id = o.cutomer_id

-- cross join it is cartesion product basically a cross product  //mostly ignore
SELECT c.customer_name, o.product_name, o.quantity
 FROM customers c
CROSS JOIN orders o 

-- Innrr query  query under query
SELECT customer_name
FROM customers 
WHERE customer_id IN (
    SELECT cutomer_id FROM orders WHERE product_name = 'macbook-pro'
);

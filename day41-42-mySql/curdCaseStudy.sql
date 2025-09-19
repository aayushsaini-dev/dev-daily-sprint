INSERT INTO chai_store(
chai_name, price, chai_type, available
) VALUES
('Masala Chai', 30.00, 'Spiced', TRUE),
('Green Chai', 20.00, 'Herbal', TRUE),
('Black Chai', 25.00, 'Classic', TRUE),
('Iced Chai', 35.00, 'Cold' ,TRUE),
('Oolong Chai', 40.00, 'Special', TRUE);


SELECT chai_name AS "Chai Name", price AS "Cost in INR" FROM chai_store;

--SELECT * FROM chai_store WHERE price < 30;

SELECT * FROM chai_store ORDER BY price DESC;

SELECT * FROM chai_store WHERE chai_name LIKE '%Chai%';

UPDATE chai_store SET PRICE = 38.00, available = TRUE
  WHERE chai_name = 'Iced Chai';
  
DELETE FROM chai_store WHERE chai_name = 'Black Chai';  

SELECT * FROM chai_store;

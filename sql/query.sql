-- E-mail addresses of users who have bought PRODUCT_1 in the past 7 days.
SELECT DISTINCT u.email
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN products p ON p.id = ANY(o.products_id)
WHERE p.name = 'PRODUCT_1'
  AND o.order_date >= current_date - interval '7 days';

-- Total sales amount, per day
SELECT o.order_date::date AS sales_date,
       SUM(p.price) AS total_sales
FROM orders o
JOIN products p ON p.id = ANY(o.products_id)
GROUP BY o.order_date::date
ORDER BY sales_date;
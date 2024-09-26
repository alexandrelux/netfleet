-- 1. Calculer les ventes totales des 30 derniers jours
WITH sales_data AS (
    SELECT 
        p.id AS product_id,
        p.name,
        SUM(p.price * oi.quantity) AS total_sales_last_30_days
    FROM 
        products p
    JOIN 
        LATERAL (
            SELECT unnest(o.products_id) AS product_id, generate_series(1, array_length(o.products_id, 1)) AS quantity
            FROM orders o
            WHERE o.order_date >= current_date - interval '30 days'
        ) oi ON oi.product_id = p.id
    GROUP BY 
        p.id, p.name
)

-- 2. Calculer les ventes moyennes par jour
, avg_sales_per_day AS (
    SELECT 
        product_id,
        name,
        total_sales_last_30_days,
        total_sales_last_30_days / 30 AS avg_sales_per_day
    FROM 
        sales_data
)

-- 3. Prédire les ventes pour les 7 prochains jours
SELECT 
    product_id,
    name,
    total_sales_last_30_days,
    avg_sales_per_day,
    avg_sales_per_day * 7 AS predicted_sales_next_7_days
FROM 
    avg_sales_per_day;

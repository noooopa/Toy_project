-- load_data.sql

-- Locations 데이터 적재
\COPY Locations(region_code, sido, gugun, region) FROM 'C:/Users/Myo_0/Desktop/toyproject/db/Locations_converted.csv' DELIMITER ',' CSV HEADER;


-- Sales 데이터 적재
\COPY Sales(sales_date, product_code, customer_code, promotion_code, channel_code, quantity, unit_price, region) FROM 'C:/Users/Myo_0/Desktop/toyproject/db/Sales_converted.csv' DELIMITER ',' CSV HEADER;

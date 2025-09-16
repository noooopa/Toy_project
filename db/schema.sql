-- schema.sql

-- 1. 지역 테이블
CREATE TABLE Locations (
   region_code INT PRIMARY KEY,
   sido VARCHAR(50),
   gugun VARCHAR(50),
   region VARCHAR(50)
);

-- 2. 고객 테이블
CREATE TABLE Customers (
   customer_code INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   region_code INT,
   customer_name VARCHAR(50),
   gender VARCHAR(5),
   birth_date DATE,
   FOREIGN KEY (region_code) REFERENCES Locations(region_code)
);

-- 3. 상위 카테고리 테이블
CREATE TABLE Categories (
   category_code INT PRIMARY KEY,
   category_name VARCHAR(50)
);

-- 4. 제품분류 테이블
CREATE TABLE Product_categories (
   product_category_code VARCHAR(10) PRIMARY KEY,
   product_category_name VARCHAR(100),
   category_code INT,
   FOREIGN KEY (category_code) REFERENCES Categories(category_code)
);

-- 5. 프로모션 테이블
CREATE TABLE Promotions (
   promotion_code INT PRIMARY KEY,
   promotion_name VARCHAR(50),
   discount_rate DECIMAL(5,2)
);

-- 6. 채널 테이블
CREATE TABLE Channels (
   channel_code INT PRIMARY KEY,
   channel_name VARCHAR(50)
);

-- 7. 제품 테이블
CREATE TABLE Products (
   product_code INT PRIMARY KEY,
   product_name VARCHAR(100),
   color VARCHAR(30),
   cost_price INT,
   unit_price INT,
   product_category_code VARCHAR(10),
   FOREIGN KEY (product_category_code) REFERENCES Product_categories(product_category_code)
);

-- 8. 날짜 테이블
CREATE TABLE date_info (
   date_code INT PRIMARY KEY,
   sales_date DATE,
   date_year INT,
   partition_no INT, -- 분기
   month_no INT,     -- 월(no)
   month_en VARCHAR(10) -- 월(영문)
);

-- 9. 판매 테이블
CREATE TABLE Sales (
   id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   sales_date DATE NOT NULL,
   product_code INT NOT NULL,
   customer_code INT NOT NULL,
   promotion_code INT,
   channel_code INT,
   quantity INT,
   unit_price INT,
   region VARCHAR(50),
   FOREIGN KEY (product_code) REFERENCES Products(product_code),
   FOREIGN KEY (customer_code) REFERENCES Customers(customer_code),
   FOREIGN KEY (promotion_code) REFERENCES Promotions(promotion_code),
   FOREIGN KEY (channel_code) REFERENCES Channels(channel_code)
);

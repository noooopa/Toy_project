# backend/app/routers/sales.py
from fastapi import APIRouter
from app.db import postgres_pool

router = APIRouter(prefix="/sales", tags=["sales"])

@router.get("/total_gains/")
async def sales_total_gains():
    async with postgres_pool.acquire() as conn:
        rows = await conn.fetch("""
            SELECT sum(unit_price*quantity) as total_gain
            FROM sales
            GROUP BY product_code
        """)
        return [dict(row) for row in rows]

@router.get("/net_gains/")
async def sales_net_gains():
    async with postgres_pool.acquire() as conn:
        rows = await conn.fetch("""
            SELECT (sum(sales.unit_price*quantity)-sum(cost_price*quantity)) as net_gain
            FROM sales,products
            WHERE sales.product_code=products.product_code
            GROUP BY sales.product_code
        """)
        return [dict(row) for row in rows]

@router.get("/customers/")
async def sales_by_customer():
    async with postgres_pool.acquire() as conn:
        rows = await conn.fetch("SELECT count(*) as total_customers FROM customers;")
        return [dict(row) for row in rows]

@router.get("/region/")
async def sales_by_region():
    async with postgres_pool.acquire() as conn:
        rows = await conn.fetch("SELECT * FROM View_Sales_By_Region;")
        return [dict(row) for row in rows]

@router.get("/promotion/")
async def sales_by_promotion():
    async with postgres_pool.acquire() as conn:
        rows = await conn.fetch("SELECT * FROM View_Sales_By_Promotion;")
        return [dict(row) for row in rows]

@router.get("/year/")
async def sales_by_year():
    async with postgres_pool.acquire() as conn:
        rows = await conn.fetch("SELECT * FROM View_Sales_By_Year;")
        return [dict(row) for row in rows]

@router.get("/product/")
async def sales_by_product():
    async with postgres_pool.acquire() as conn:
        rows = await conn.fetch("SELECT * FROM View_Sales_By_Product;")
        return [dict(row) for row in rows]

@router.get("/channel/")
async def sales_by_channel():
    async with postgres_pool.acquire() as conn:
        rows = await conn.fetch("SELECT * FROM View_Sales_By_channel;")
        return [dict(row) for row in rows]

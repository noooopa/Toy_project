# backend/app/db.py
import asyncpg
import os
from dotenv import load_dotenv

load_dotenv()

postgres_pool: asyncpg.Pool | None = None

async def connect():
    global postgres_pool
    postgres_pool = await asyncpg.create_pool(
        database=os.getenv("POSTGRES_DB", "postgres"),
        user=os.getenv("POSTGRES_USER", "postgres"),
        password=os.getenv("POSTGRES_PASSWORD", "1234"),
        host=os.getenv("POSTGRES_HOST", "localhost"),
        port=int(os.getenv("POSTGRES_PORT", "5432"))
    )

async def disconnect():
    global postgres_pool
    if postgres_pool:
        await postgres_pool.close()

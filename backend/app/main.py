# backend/app/main.py
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from app.db import connect, disconnect
from app.routers import sales

app = FastAPI(title="customers", description="customers API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 배포 시에는 특정 도메인으로 제한 권장
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    await connect()

@app.on_event("shutdown")
async def shutdown_event():
    await disconnect()

# 라우터 등록
app.include_router(sales.router)

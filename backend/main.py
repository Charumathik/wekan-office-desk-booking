from fastapi import FastAPI
from desk_data import desks

app = FastAPI()

@app.get("/")
async def home():
    return {"message": "Wekan Office Desk Booking API"}

@app.get("/desks")
async def get_desks():
    return desks
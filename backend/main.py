from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from desk_data import desks

app = FastAPI()

# Add CORS middleware to allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def home():
    return {"message": "Wekan Office Desk Booking API"}

@app.get("/desks")
async def get_desks():
    return desks


@app.post("/book-desk/{desk_id}")
async def book_desk(desk_id: int):

    for desk in desks:

        if desk["id"] == desk_id:

            # Maintenance check
            if desk["maintenance"] == True:
                raise HTTPException(
                    status_code=400,
                    detail="Desk is under maintenance"
                )

            # Already occupied check
            if desk["status"] == "occupied":
                raise HTTPException(
                    status_code=400,
                    detail="Desk already occupied"
                )

            desk["status"] = "occupied"

            return {
                "message": "Desk booked successfully",
                "desk": desk
            }

    raise HTTPException(status_code=404, detail="Desk not found")
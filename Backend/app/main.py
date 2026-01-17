from fastapi import FastAPI

app = FastAPI(title="Fake Product Detection System")

@app.get("/")
def root():
    return {"message": "Fake Product Detection API is running"}

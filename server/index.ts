import express, { Express, Request, Response } from "express";
import { NextAuth } from "./routes";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(NextAuth);

// Deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req: Request, res: Response) => {
    res.send("API running");
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

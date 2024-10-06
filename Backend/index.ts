import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectToDB } from "./config/db";
// Import routes
import emailerRoute from "./routes/emailer";

// Load the env
config();

// connect to Database
// connectToDB();

// configure app
const app: Express = express();
const PORT: string = process.env.PORT || "5000";

// CORS configuration
const corsConfiguration = {
  //   origin: [""],
  origin: "*",
  optionSucessStatus: 200,
};

// middleware to use import routes and enable cors
app.use(express.json());
app.use(cors(corsConfiguration));

// Routes
app.use("/api/send-email", emailerRoute);

// Landing endpoint
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "200 Ok BTC India Loading :)" });
});

// Listening at
app.listen(PORT, () => {
  console.log(`Server active at port: ${PORT}`);
});

import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-record";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors(
  {
    origin: ["https://finance-helper-chi.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }
));

app.use(express.json());


const mongoURI: string =
  "mongodb+srv://akashsingh32003:xdVY26A1p7996SrS@financetracker.s4rzira.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-record", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});

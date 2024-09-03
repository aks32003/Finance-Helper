import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-record";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

// CORS whitelist
const whitelist = [
  'https://financehelper.vercel.app',
  'https://another-allowed-origin.com',
  // add other allowed origins here
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // Allow request if origin is in the whitelist or if there's no origin (like for server-to-server requests)
      callback(null, true);
    } else {
      // Reject request if origin is not in the whitelist
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());

const mongoURI: string =
  "mongodb+srv://akashsingh32003:xdVY26A1p7996SrS@financetracker.s4rzira.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-record", financialRecordRouter);
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});

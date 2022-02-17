import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todo.js";
import mongoose from "mongoose";

const app = express();

// database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }); // connect to the database
const db = mongoose.connection; // store connection
db.on("error", (error) => console.error(error)); // error handling
db.once("open", () => console.log("connected to db")); // log success message on successful connection

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", todoRoutes);

app.listen(8000 || process.env.PORT, () => {
  console.log("Server running");
});

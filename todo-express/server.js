import express from "express";
import cors from "cors";
import { connectDb } from "./config/dbConn.js";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todo.js";
require("dotenv/config");
connectDb();
var app = express();
const PORT = 8000 || process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", todoRoutes);

app.listen(PORT, () => {
    console.log("Server running");
  });

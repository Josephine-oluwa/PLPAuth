import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import student from "./Router/studentRouter";
import bags from "./Router/bagRouter";
import fees from "./Router/feeRouter";

// const URL: string = "mongodb://127.0.0.1:27017/petDB";
// const URL: string = "mongodb://0.0.0.0:27017/dbs";
const URL: string = "mongodb+srv://josephine:josephine@cluster0.kckuw8r.mongodb.net/db?retryWrites=true&w=majority";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api", student);
app.use("/api", bags);
app.use("/api", fees);

app.listen(2233, () => {
  mongoose.connect(URL).then(() => {
    console.log("connected...🚀🚀🚀");
  });
});

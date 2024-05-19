import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import router from "./admin.js";
import contactRouter from "./contact.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);
app.use('/contact', contactRouter);



const CONNECTION_URL = "mongodb+srv://asheeshsahu7300:607HjcA88vbygh0H@cluster0.woiddl1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT =  5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

 

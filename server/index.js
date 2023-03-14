import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import "dotenv/config";

import routeV1 from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routeV1);

const port = process.env.PORT || 5000;
const server = http.createServer(app);


  server.listen(port, () => console.log(`Server is listening on port ${port}`));


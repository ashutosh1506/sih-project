import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// routes import
import userRouter from "./routes/userRoute.js";
const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "20kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.use(cookieParser());

// routes declared

app.use("/api/v1/users", userRouter);

export default app;

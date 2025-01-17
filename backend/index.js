import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user_route.js";
import companyRoute from "./routes/company_route.js";
import jobRoute from "./routes/job_routes.js";
import applicationRoute from "./routes/application_route.js";
import path from "path";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 8080;
const app = express();

const _dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "https://dream-hunt-1.onrender.com",
  credentials: true,
};
app.use(cors(corsOptions));


//api's

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*',(_,res) => {
  res.sendFile(path.resolve(_dirname, "frontend" , "dist", "index.html"));
})

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});

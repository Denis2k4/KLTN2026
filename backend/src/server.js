import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";


import connectDB from "./config/connectDB.js";
import routes from "./routes/index.routes.js"; 

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

routes(app);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Lỗi server!",
  });
});

app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
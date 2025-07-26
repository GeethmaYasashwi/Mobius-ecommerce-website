import "dotenv/config";
import express from "express";
import productRouter from "./api/product.js";
import categoryRouter from "./api/category.js";
import reviewRouter from "./api/review.js";
import { connectDB } from "./infrastructure/db/index.js";
import globalErrorHandlingMiddleware from "./api/middleware/global-error-handling-middleware.js";
import cors from "cors";


const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); //It conversts the incoming json payload of a  request into a javascript object found in req.body
app.use(cors({ origin: "http://localhost:5173" }));
// app.use((req, res, next) => {
//   console.log("Hello from pre-middleware");
//   next(); // this next() functions is like passing the ball to continue execution. without this the code become stuck
// });

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/reviews", reviewRouter);

app.use(globalErrorHandlingMiddleware); // usig global error handling to reduce the code duplication for every instance

connectDB();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

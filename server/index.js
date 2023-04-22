const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

const orderRoutes = require('./routes/orders');

const { connectDB } = require("./config/db");
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use('/api/orders', orderRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});
connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/db");
const path = require('path')
dotenv.config();
//mogodb connection

connectDb();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//static files
app.use(express.static(path.join(__dirname, './client/build')))

//static routes

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})


//port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is Running Successfully");
});

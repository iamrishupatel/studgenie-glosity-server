require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const eventRoutes = require("./routes/event");
const noticeRoutes = require("./routes/notice");

const app = express();
// DB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB CONNECTED"))
  .catch(e => console.log(e));

// middlewares
var corsOptions = {
  origin: "https://glosity.netlify.app",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", eventRoutes);
app.use("/api", noticeRoutes);
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at PORT ${process.env.PORT}`);
});

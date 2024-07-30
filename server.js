// server.js
const express = require("express");
const mongoose = require("mongoose");
const { PORT, MONGO_URI } = require("./config");
const authRoutes = require("./routes/authRoutes");
const userDataRoutes = require("./routes/userDataRoutes");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.use("/api/auth", authRoutes);
app.use("/api/user-data", userDataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

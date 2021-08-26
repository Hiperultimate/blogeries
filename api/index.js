const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const postRoute = require("./routes/posts.js");

dotenv.config();
const PORT = 5000;

//Middleware
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected to database"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/post", postRoute);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Backend is running at ${PORT}`);
});

const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer"); // A package for storing various kinds of files on your server (if you are not using services like AWS or firebase)
const path = require("path");

const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const postRoute = require("./routes/posts.js");
const categoryRoute = require("./routes/categories.js");

dotenv.config();
const PORT = 5000;

//Middleware
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected to database"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Backend is running at ${PORT}`);
});

// app create
const express = require("express");

const app = express();

// port find
require("dotenv").config();

// middleware add
app.use(express.json());
const fileupload = require("fileupload");
app.use(fileupload());

// db connection
const db = require("./config/database");
db.connect();

// connect to cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api route mount
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

// activate server

app.listen(PORT, () => {
  console.log(`server listening ${PORT}`);
});

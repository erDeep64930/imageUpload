const File = require("../models/File");

// localFileUpload => handler function

exports.localFileUpload = async (req, res) => {
  try {
    // fetch file from request 
    const file = req.files.file;
    console.log(file);
    let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
    console.log(path);
    // creat ea path whrere file need to be stored on server
    file.mv(path, (err) => {
      console.log(err);
    });
    // create successful 
    res.json({
      success: true,
      message: "local file uploaded successfully",
    });
  } catch (error) {
    console.log(err);
  }
};

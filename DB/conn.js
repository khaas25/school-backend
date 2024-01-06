var mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://khaas25:${process.env.PASSWORD}@wlms.zjs0lk4.mongodb.net/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log(e);
  });

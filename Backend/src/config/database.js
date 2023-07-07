const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbconnect = () => {
  mongoose
    .connect(process.env.DBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongooDb is connected..@@@"))
    .catch((err) => console.log(err));
};

module.exports = dbconnect;

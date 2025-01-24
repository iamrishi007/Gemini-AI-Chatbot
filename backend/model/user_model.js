const mongoose = require("mongoose");

const userModelSchema = mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true,
          unique: true
     },
     password: {
          type: String,
          required: true
     }
     
});

const userModel = mongoose.model("user", userModelSchema);

module.exports = userModel;

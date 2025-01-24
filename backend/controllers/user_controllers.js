const userModel = require("../model/user_model")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userRegister = async (req, res) => {
     const { name, email, password } = req.body


     if (!name || !email || !password) {
          return res.status(400).json({
               message: "All fields are required.",
          });
     }

     try {
          const user_exist = await userModel.findOne({ email })
          if (user_exist) {
               return res.status(400).json({
                    message: "User already exists. Please log in instead.",
               });
          }

          const hashPassword = await bcryptjs.hash(password, 10)

          const new_user = new userModel({
               name,
               password: hashPassword,
               email,
          });

          await new_user.save();
          res.status(201).json({
               message: "User registered successfully",
               user: { id: new_user._id, name: new_user.name, email: new_user.email },
          });
     } catch (error) {
          res.status(500).json({
               message: "Registration failed. Please try again.",
               error: error.message,
          });
     }
};

const userLogin = async (req, res) => {
     const { email, password } = req.body;


     if (!email || !password) {
          return res.status(400).json({
               message: "Email and password are required.",
          });
     }

     try {
          const user = await userModel.findOne({ email })

          if (!user) {
               return res.status(400).json({
                    message: "Invalid email.",
               });
          }

          const isMatch = await bcryptjs.compare(password, user.password)

          if (!isMatch) {
               return res.status(400).json({
                    message: "Invalid password.",
               });
          }

          const KEY = process.env.SECRET_KEY;

          const token = jwt.sign({ id: user._id, email: user.email }, KEY, { expiresIn: "1h" });

          res.status(200).json({
               message: "User logged in successfully",
               token: token,
               user: { id: user._id, name: user.name, email: user.email },
          });
     } catch (error) {
          res.status(500).json({
               message: "Login failed. Please try again.",
               error: error.message,
          });
     }
};

module.exports = { userRegister, userLogin }

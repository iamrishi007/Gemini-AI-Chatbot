const dotenv = require("dotenv").config()
const express = require("express")
const connect = require("./config/db")
const userRouter = require("./routes/user_routes")

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json())


app.get("/", (req, res) => {
     res.send("Server_Is_Running_Chat_Bot_Project ! ");
});

app.use(cors());



app.use("/user", userRouter);

app.listen(PORT, async () => {
     try {
          await connect;
          console.log("Connected to MongoDB");
          console.log(`Server running on port ${PORT}`);
     } catch (error) {
          console.error("Error connecting to MongoDB:", error.message);
     }
});

const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const userRoutes = require("./routes/user.routes");
const connectMongoDB = require("./db/connectMongoDB");
const { server, app, io } = require("./socket/socket");
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

/* app.get("/", (req, res) => {
  res.send("Hello World!");
}); */

server.listen(PORT, () => {
  connectMongoDB();
  console.log("App running on " + PORT);
});

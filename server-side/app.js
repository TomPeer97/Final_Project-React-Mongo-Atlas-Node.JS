const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const contacts = require("./routes/contacts");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const { User } = require("./models/user");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://tom:Tpeer1997@myrestapi.6ahb8.mongodb.net/myRestApi?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(err));

app.use(cors());

app.use(express.json());

app.use("/api/users", users);

app.use("/api/auth", auth);

app.use("/api/cards", cards);

app.use("/api/contacts", contacts);

app.get("/", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

app.get("/allusers", (req, res) => {
  const users = User.find({});
  console.log(users.length);
  res.send(users[0]);
});

const port = 3000;
http.listen(port, () => console.log(`Listening on port ${port}...`));

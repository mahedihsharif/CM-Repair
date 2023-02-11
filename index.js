const express = require("express");
const app = express();
const cors = require("cors");
const MONGO_URL = require("./database/db");
const port = process.env.PORT || 7000;
const userAuth = require("./routes/auth");
const morgan = require("morgan");
app.use(cors());
app.use(express.json());
app.use(morgan());
MONGO_URL();

app.get("/", () => {
  console.log("Database is connected sucessfully!");
});
app.use("/api/auth", userAuth);
app.listen(port, () => console.log(`Listening port is runnig at ${port}`));

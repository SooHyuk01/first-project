const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

const home = require("./routes/home/route");
app.set("views", path.join(__dirname, "views/home"));
app.set("view engine", "ejs");

app.use("/", home);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
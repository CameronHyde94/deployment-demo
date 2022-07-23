const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

//Middleware 
app.use(express.static(path.join(__dirname, "../public")));
app.use("/images", express.static(path.join(__dirname, "../images")));

//Endpoints
app.get("/js", function(req, res) {
    res.sendFile(path.join(__dirname, "../server.js"));
});

const port = process.env.PORT || 4006;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`);
});
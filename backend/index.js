// load required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// config
dotenv.config();
const app = express();
const port = 3001;
/*
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})); */
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// API Routes

app.get("/", (req, res) => {
    res.send("HopeKCC Team OS Git Test API");
});

// User Webpage API

app.use("/webfetch", require("./routes/webfetch"));

app.use("/auth", require("./routes/authapi"));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

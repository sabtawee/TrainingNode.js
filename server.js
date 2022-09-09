const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.static(path.join(__dirname,'./files')));

app.use("/api/login_manage", require("./api/api_login"))

app.listen(2005, () => {
  console.log("Backend is running...");
});

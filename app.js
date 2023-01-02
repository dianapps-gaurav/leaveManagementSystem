const express = require("express");
const app = express(); 

const { json, urlencoded } = require("body-parser");
const dbConnect = require("./connection/config");

dbConnect();
app.use(
    json({
        extended: true,
    }));

app.use("",require("./routes/org-routes"));

app.use(
    urlencoded({
        extended: true,
    })
);

app.listen(8080, () => {

    console.log("listening to port number 8080");

});

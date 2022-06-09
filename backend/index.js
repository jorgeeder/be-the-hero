const { response } = require("express");
const express = require("express");

const app = express();

app.get("/",(request, response) => {
    return response.json({
        event: "Backend Application",
        author: "Jorge Eder"
    });
});

app.listen(3333);
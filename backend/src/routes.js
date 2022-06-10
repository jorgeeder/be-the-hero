const express = require ("express");
const routes = express.Router();

routes.post("/ongs", (request, response) => {
    const body = request.body;

    console.log(body)

    return response.json({
        event: "Backend Application",
        author: "Jorge Eder"
    });
});

module.exports = routes;
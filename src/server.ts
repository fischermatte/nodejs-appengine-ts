import express from "express";

// Create a new express app instance
const PORT = Number(process.env.PORT) || 8080;
const app: express.Application = express();

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(PORT, function () {
    console.log("App is listening on port 3000!");
});

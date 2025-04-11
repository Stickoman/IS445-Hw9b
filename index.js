const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/views", express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/ex1", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "ex1.html"));
});

app.post("/ex1", (req, res) => {
    const { name, email } = req.body;
    const message = `${name}, Thank you for your order. We will keep you posted on delivery status at ${email}.`;
    res.send({ message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

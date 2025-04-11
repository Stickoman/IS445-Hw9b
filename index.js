const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

let articles = [];

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

app.get("/ex2", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "ex2.html"));
});

app.post("/api/countries", (req, res) => {
    const { name, countries } = req.body;

    if (!name || !Array.isArray(countries)) {
        return res.status(400).json({ error: "Invalid data. 'name' and 'countries' (array) are required." });
    }

    const numberOfCountries = countries.length;
    const message = `${name}, you've visited ${numberOfCountries} countries.`;

    res.json({ message });
});

app.get("/ex3", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "ex3.html"));
});

app.post("/ex3", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).send({ message: "Title and content are required." });
    }

    const newId = articles.length > 0 ? Math.max(...articles.map(article => article.id)) + 1 : 1;
    const newArticle = { id: newId, title, content };

    articles.push(newArticle);

    const message = `Article "${title}" has been added with ID ${newId}.`;
    res.send({ message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

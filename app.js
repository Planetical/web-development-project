const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {  // Sending contact HTML file on GET
    res.sendFile(__dirname + '/contact.html');
});

app.post('/submit-form', (req, res) => {  // Whem form is done, submit sends POST
    const name = req.body.name;  // saving data
    const email = req.body.email;
    const message = req.body.message;
    res.send(`Message sent! Thank you, ${name}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}!`);
});
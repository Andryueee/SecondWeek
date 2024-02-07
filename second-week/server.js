const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;


    res.status(200).json({
        message: 'User registered successfully',
        username,
        email
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const clients = require("./clients");
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
const corsOptions = {
    origin: 'http://localhost:3001',
    methods: 'GET',
};
app.use(cors(corsOptions));

server.listen(port, () => {
    console.log(`Listening at ${port}`);
});

app.get('/api/clients', async (req, res) => {
    res.send(clients);
});
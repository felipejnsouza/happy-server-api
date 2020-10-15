import express, { json } from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.json('Hello world');
});

app.listen(3333);
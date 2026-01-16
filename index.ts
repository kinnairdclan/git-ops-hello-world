import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World from Wynn, here we go yo!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

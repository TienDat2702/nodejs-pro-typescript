import express from 'express';

const app = express();
const PORT = 8080;
app.get('/', (req, res) => {
    return res.send('Hello World from Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
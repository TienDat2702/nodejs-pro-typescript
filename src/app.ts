import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
    return res.send('Hello World from Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World this is a simple Express app!' });
}   );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
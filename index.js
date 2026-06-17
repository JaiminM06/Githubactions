import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    return res.json({ message: 'simple ci/cd pipeline' });
}   );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
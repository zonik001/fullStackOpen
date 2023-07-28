import express from 'express';
import count from './calculatorBmi';
const app = express();

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query
    if (typeof height === 'string' && typeof weight === 'string') {
        const josn = {
            height,
            weight,
            bmi: count([height, weight])
        }
        res.send(josn)
    } else {
        res.send({ error: "malformatted parameters" })
    }
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
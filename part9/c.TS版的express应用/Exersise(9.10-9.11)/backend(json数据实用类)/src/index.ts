import express from 'express';
import cors from 'cors'
import diagnoseRouter from './routes/diagnose'
import patientRouter from './routes/patient'
const app = express();
app.use(cors())
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/diagnose', diagnoseRouter);

app.use('/api/paitent', patientRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
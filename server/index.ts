import express from 'express';
import { register } from './services/auth';

const app = express();
const port = 8080;

app.use(express.json());

const router = express.Router();
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const data = await register(username, email, password);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  res.send('register');
});
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

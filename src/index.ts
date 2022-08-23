import express from 'express';
const PORT = 3001;
const app = express();
const router = express.Router();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.send('hello world');
  },
);
app.use('/', router);

app.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`));

export default app;
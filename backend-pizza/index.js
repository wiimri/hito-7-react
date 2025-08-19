import express from 'express';
import cors from 'cors';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.get('/api/pizzas', async (req, res) => {
  try {
    const data = await readFile(path.join(__dirname, 'data', 'pizzas.json'), 'utf8');
    const pizzas = JSON.parse(data);
    res.json(pizzas);
  } catch (err) {
    res.status(500).json({ error: 'Error al leer el archivo de pizzas' });
  }
});

app.get('/api/pizzas/:id', async (req, res) => {
  try {
    const data = await readFile(path.join(__dirname, 'data', 'pizzas.json'), 'utf8');
    const pizzas = JSON.parse(data);
    const pizza = pizzas.find(p => p.id === req.params.id);

    if (!pizza) {
      return res.status(404).json({ error: 'Pizza no encontrada' });
    }

    res.json(pizza);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la pizza por ID' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`);
});

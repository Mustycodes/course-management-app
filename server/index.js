import express from 'express'
import cors from 'cors';
import fs from 'fs';
import path from 'path'
import { fileURLToPath} from 'url'

import {courses, authors} from './data/mockData.js'

const app = express();

app.use(cors())


app.get('/api/courses', (req, res) => {
  res.status(200).send();
})


app.get('/api/authors', (req, res) => {
  res.status(200).json(authors)
})

app.get('*', (req, res) => {
  res.status(404).send("rewsource not found");
})







const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
})
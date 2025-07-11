const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const uri = process.env.MONGO_URI;
let client;

app.use(express.json());
app.get('/', (req, res) => res.send('🚀 Hello from wiz-app!'));
app.post('/todo', async (req, res) => {
  const coll = client.db().collection('todos');
  const result = await coll.insertOne({ text: req.body.text });
  res.json(result);
});

async function start() {
  client = new MongoClient(uri);
  await client.connect();
  app.listen(3000, () => console.log('Listening on 3000'));
}

start().catch(err => {
  console.error(err);
  process.exit(1);
});

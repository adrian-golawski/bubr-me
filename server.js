#!/usr/bin/env node
const express = require('express')
const app = express()
const port = 3000

const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/quote', async (req, res) => {
    let quote = await fetch("https://api.quotable.io/random").then(r => r.json());

    res.send(quote);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
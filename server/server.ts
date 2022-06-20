import express from 'express';

const app = express();

app.get('/new', (req, res) => {
  res.send('new qrcode')
})

app.listen('8080', () => {
  console.log('server running in port 8080 || Current time: ' + new Date().toISOString());
})
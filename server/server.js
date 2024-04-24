const express = require('express');
const path = require('path');
const app = express();

// if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
// }
app.listen(3000);

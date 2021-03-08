const express = require('express');
const app = express();

app.listen(3300, () => console.log('Front End Capstone listening on port 3000!'));
app.use(express.static('dist'));
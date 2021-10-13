const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const port = 3001;

app.use('/', htmlRoutes);
//app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Express Challenge app at http://localhost:${port}`);
})
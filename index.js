const express = require('express');
const app = express();
router = require('./routes/index');

app.use('/', router);

const port = process.env.PORT || 3000;
app.listen()

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

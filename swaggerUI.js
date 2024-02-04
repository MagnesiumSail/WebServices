const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./path/to/your/swagger_output.json');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

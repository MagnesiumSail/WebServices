const swaggerAutogen = require('swagger-autogen')();

const outputFile = 'swagger_output.json';
const endpointsFiles = ['./routes/index.js']; // array of your route files

swaggerAutogen(outputFile, endpointsFiles);
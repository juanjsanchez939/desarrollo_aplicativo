import express from 'express';
import config from './config.js';
import mongoose from 'mongoose';
import configureDependencies from './configuracion_dependencies.js';
import configureMiddlewares from './middlewares/configure_middlewares.js';

if (!config.jwtKey) {
  console.error("No se ha definido un jwtKey en la configuración.");
  process.exit(1);
}

mongoose.connect(config.dbConnection)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(error => console.error('Error al conectar:', error));

const app = express();
const router = express.Router();
app.use('/api', router);

configureMiddlewares(router);
configureDependencies();

app.listen(config.port, () => {
  console.log(`Servidor corriendo en http://localhost:${config.port}`);
});

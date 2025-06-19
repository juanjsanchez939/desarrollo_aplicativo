import express from 'express';
import { controllers } from './controllers/controllers.js';
import { errorHandlerMiddleware } from './middlewares/error_handler_middleware.js';
import { logMiddleware } from './middlewares/log.middleware.js';
import configureDependencies from './configuracion_dependencies.js'; 
import config from './config.js'; 
import mongoose from 'mongoose';

if (!config.jwtKey) {
    console.error(`No se ha definido un jwt en la configuración. Por favor cree un archivo config.local.js según se especifica en config.js`);
    process.exit(1);
}

mongoose.connect(config.dbconnection)
.then(() => console.log('Conectado a la base de datos'))
.catch(error => console.error('Error al conectar a la base de datos:', error));



const app = express();

const router = express.Router();
app.use('/api', router);

router.use(express.json());
router.use(logMiddleware);

controllers(router);

router.use(errorHandlerMiddleware);

configureDependencies();

app.listen(
    config.port,
    ()=> {
        console.log((`Servidor corriendo en http://localhost:${config.port}`));
    }
);



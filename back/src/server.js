/////////////////////////////////////////////////////////////
// Variables Iniciales 


const express = require('express');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const { agendaRouter } = require('./routers/agenda');
const { orderRouter } = require('./routers/order');
const { paymentMethodRouter } = require('./routers/paymentMethod');
const { productRouter } = require('./routers/product');
const { userRouter } = require('./routers/user');
const cors = require('cors');


/////////////////////////////////////////////////////////////
// Función Principal


const ServerUp = (port,message= 'The server is ready') =>{

    /////////////////////////////////////////////////////////////
    // Variables 

    const server = express();

    /////////////////////////////////////////////////////////////
    // Swagger

    const swaggerDocs = require('./swagger.json')

    /////////////////////////////////////////////////////////////
    // Global Middlewares

    server.use(express.json());
    server.use(express.urlencoded({extended: false}));
    server.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
    server.use(helmet());
    server.use(cors());

    /////////////////////////////////////////////////////////////
    // Routers

    server.use('/agendas', agendaRouter());
    server.use('/mediosDePago', paymentMethodRouter());
    server.use('/productos', productRouter());
    server.use('/usuarios', userRouter());
    server.use('/pedidos', orderRouter());

    /////////////////////////////////////////////////////////////
    //Puerto

    server.listen( port , ()=>{
        console.log(`${message} in port ${port}`)
    })

    return server;
}


/////////////////////////////////////////////////////////////
// Exportamos


module.exports= {ServerUp}
/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtro, páginação)  
 * Route Params: Parâmetros utilizados para identificar recursos 
 * 
 */
 

const express = require('express');
const cors = require('cors');
const routes =  require('./routes');

const app = express();

app.use(cors());
app.use(express.json);
app.use(routes);



app.listen(3333); 
const express = require('express');
const OngController = require('./controllers/OngController');
const InicidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes =  express.Router();

routes.post('/session', SessionController.create)

//ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

//INCIDENTS
routes.get('/incidents', InicidentController.index);
routes.post('/incidents', InicidentController.create);
routes.delete('/incidents/:id', InicidentController.delete);



module.exports = routes;
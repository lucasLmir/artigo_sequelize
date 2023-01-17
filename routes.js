import express from 'express';
import clients from './src/controllers/clients.js';
import clientes from './src/controllers/clientes.js';

const routes = express.Router();

routes.get('/clients',clients.findAll);
routes.get('/clients/:id',clients.findClient);
routes.put('/clients/:id',clients.updateClient);
routes.delete('/clients/:id',clients.deleteClient);
routes.post('/clients', clients.addClient);
routes.get('/clientes',clientes.findAll);
routes.get('/clientes/:id',clientes.findClient);
routes.put('/clientes/:id',clientes.updateClient);
routes.delete('/clientes/:id',clientes.deleteClient);
routes.post('/clientes', clientes.addClient);

export { routes as default };
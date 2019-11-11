const {Router} = require('express');
const controllerPost = require('/controllerPost');

const routes = Router();

routes.get('/list/users', UserController.index);
routes.get('/users/:id', UserControler.show);
routes.post('/register/user', UserController.store);
routes.put('/update/user/:id', UserController.update);
routes.delete('/delete/user/:id', UserController.delete);

routes.get('/list/posts', PostController.index);
routes.get('/list/posts/:id', PostController.show);
routes.post('/register/post', PostController.store);
routes.put('/update/post/:id', PostController.update);
routes.delete('/delete/post/:id', PostController.delete);

module.exports = routes;

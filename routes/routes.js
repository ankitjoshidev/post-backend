const userController = require('../controller/user.controller');
module.exports = (app) => {
    // user routes start
    app.post('/users', userController.createUser);
    app.put('/users/:id', userController.updateUser);
    app.delete('/users/:id', userController.deleteUser);
    app.get('/users', userController.getAllUsers);
    app.post('/signin', userController.signIn);
    // user routes end
  };
const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
      // Validate user input (adjust as needed):
      const { firstName, lastName, password, email, registered, active } = req.body;
      const checkUserExist = await User.findOne({ where: { email } });
      if(checkUserExist){
        res.status(403).json({ message: 'User exists with this email', user: checkUserExist });
      } else {
          const newUser = await User.create({
            firstName: firstName, lastName: lastName, password: password, email: email, registered: registered, active: active
          });
          res.status(201).json({ message: 'User created successfully', user: newUser });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating user' });
    }
  };
  exports.updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const { firstName, lastName, password, email, registered, active } = req.body;
      const existingUser = await User.findByPk(userId);
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      await existingUser.update({
        firstName: firstName, lastName: lastName, password: password, email: email, registered: registered, active: active
      });
      return res.status(200).json({ message: 'User updated successfully', user: existingUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating user' });
    }
  };
  exports.deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const existingUser = await User.findByPk(userId);
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      await existingUser.destroy();
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting user' });
    }
  };
  exports.getAllUsers = async (req, res) => {
    try {
      const allUsers = await User.findAll();
      return res.status(200).json({ users: allUsers });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error retrieving users' });
    }
  };
  
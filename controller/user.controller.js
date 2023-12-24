const User = require('../models/User');
exports.createUser = async (req, res) => {
    try {
      // Validate user input (adjust as needed):
      const {
        user_pass, user_nicename, user_email, user_url, user_registered,
        user_activation_key, user_status, display_name,
      } = req.body;
      const checkUserExist = await User.findOne({ where: { user_email } });
      if(checkUserExist){
        res.status(403).json({ message: 'User exists with this email', user: checkUserExist });
      } else {
          const newUser = await User.create({
            user_pass, user_nicename, user_email, user_url,
            user_registered, user_activation_key, user_status, display_name,
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
      const {
        user_pass, user_nicename, user_email, user_url, user_registered,
        user_activation_key, user_status, display_name,
      } = req.body;
      const existingUser = await User.findByPk(userId);
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      await existingUser.update({
        user_pass, user_nicename, user_email, user_url,
        user_registered, user_activation_key, user_status, display_name,
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
  
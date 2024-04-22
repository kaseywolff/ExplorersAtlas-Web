import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcryptjs';

const userController = {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { firstname, lastname, username, password, email } = req.body;

      // Check if username and password were provided
      if (!username || !password) {
        return res.status(400).json({ error: 'Username or password not provided' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const user = await User.create({ firstname, lastname, username, password: hashedPassword, email });

      // Set user in response locals
      res.locals.user = user;

      // Continue to next middleware
      next();
    } catch (error) {
      // Handle errors
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Add other controller methods here
};

export default userController;

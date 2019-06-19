import express from 'express';
import { socialSignUp, regularSignUp } from '../controllers/SignUpController';

const loginController = express.Router();

loginController.
  post('/social', (req, res) => {
    socialSignUp(req, res);
  }).post('/', (req, res) => {
    regularSignUp(req, res);
  });

export default loginController;

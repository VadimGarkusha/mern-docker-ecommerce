import express from 'express';
import loginRoute from './LoginRoute';

const router = express.Router();

router.use('/login', loginRoute);

export default router;

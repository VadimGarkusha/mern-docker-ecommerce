import express from 'express';
import testController from '../controllers/Test';

const testRoute = express.Router();

export default testRoute.get('/', (req, res) => {
    testController(req, res);
});
import { Router } from 'express';
import main from './main.route';

const router: Router = Router();
router.use('/', main);

export default router;

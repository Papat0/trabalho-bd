/* eslint-disable */
import { agencyController, countController } from '../../controllers';
import { Router, Request, Response, } from 'express';

const route: Router = Router();
route.get('/agency', (req: Request, res: Response) => {
  agencyController.getAgency(req, res);
});
route.post('/create-agency', (req: Request, res: Response) => {
  agencyController.createAgency(req, res);
});
route.get('/find-all-agency', (req: Request, res: Response) => {
  agencyController.findAllAgency(req, res);
});

route.post('/deposit', (req: Request, res: Response) => {
  countController.depositMoney(req, res);
});
route.post('/recover', (req: Request, res: Response) => {
  countController.recoverMoney(req, res);
});
route.post('/create-account', (req: Request, res: Response) => {
  console.log('rodando');
  countController.createAccount(req, res);
});
route.get('/find-all-account', (req: Request, res: Response) => {
  countController.findAllAccount(req, res);
});

export default route;



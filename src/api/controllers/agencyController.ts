import { Request, Response } from 'express';
import { v4 } from 'uuid';
import { agencyRepository } from '../repositories';

export async function getAgency(req: Request, res: Response): Promise<any> {
  const params = req.query;

  await agencyRepository
    .findByAgency(params)
    .then((result) =>
      res.status(200).send({
        success: true,
        payload: result
      })
    )
    .catch((err) =>
      res.status(400).send({
        err: err
      })
    );
}
export async function createAgency(req: Request, res: Response): Promise<any> {
  const params = req.body;

  await agencyRepository
    .createAgency({ ...params, id: v4() })
    .then((result) =>
      res.status(200).send({
        success: true,
        payload: result
      })
    )
    .catch((err) =>
      res.status(400).send({
        err: err
      })
    );
}
export async function findAllAgency(req: Request, res: Response): Promise<any> {
  const params = req.query;

  await agencyRepository
    .findAllAgency(params)
    .then((result) =>
      res.status(200).send({
        success: true,
        payload: result
      })
    )
    .catch((err) =>
      res.status(400).send({
        err: err
      })
    );
}

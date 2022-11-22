import { Request, Response } from 'express';
import { accountRepository } from '../repositories';
import { v4 } from 'uuid';

export async function getAccount(req: Request, res: Response): Promise<any> {
  const params = req.query;

  await accountRepository
    .findByAccount(params)
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

export async function findAllAccount(
  req: Request,
  res: Response
): Promise<any> {
  const params = req.query;

  await accountRepository
    .findAllAccount(params)
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
export async function createAccount(req: Request, res: Response): Promise<any> {
  const params = req.body;

  await accountRepository
    .createAccount({
      ...params,
      num_conta: Math.floor(Math.random() * (100000 - 1 + 1) + 1),
      id: v4(),
      saldo: 0,
      Agencia_agencia: params.agency
    })
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

export async function depositMoney(req: Request, res: Response): Promise<any> {
  const params = req.body;
  const account = await accountRepository.findByAccount({
    num_conta: params.num_conta
  });

  const newSaldo = Number(account[0].saldo) + Number(params.deposit_value);

  await accountRepository
    .updateAccount({ ...account[0], saldo: newSaldo })
    .then(() =>
      res.status(200).send({
        success: true,
        payload: { ...account[0], saldo: newSaldo }
      })
    )
    .catch((err) =>
      res.status(400).send({
        err: err
      })
    );
}
export async function recoverMoney(req: Request, res: Response): Promise<any> {
  const params = req.body;

  const recover_value = params?.recover_value || 0;

  const account = await accountRepository.findByAccount({
    num_conta: params.num_conta
  });

  if (recover_value > account[0].saldo) {
    return res.status(400).send({
      err: 'Saldo insuficiente'
    });
  }
  const newSaldo = Number(account[0].saldo) - Number(recover_value);

  await accountRepository
    .updateAccount({ ...account[0], saldo: newSaldo })
    .then(() =>
      res.status(200).send({
        success: true,
        payload: { ...account[0], saldo: newSaldo }
      })
    )
    .catch((err) =>
      res.status(400).send({
        err: err
      })
    );
}

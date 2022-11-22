import { db } from '../../config/database';

export async function createAccount(input: any): Promise<any> {
  const { num_conta, senha_conta, saldo, Agencia_agencia, id } = input;

  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `INSERT  INTO SistemaBancario.Conta (num_conta,senha_conta,saldo,Agencia_agencia,id) VALUES(${num_conta},${senha_conta},${saldo},${Agencia_agencia}, "${id}")`,
        function (err: string, _result: any) {
          if (err) {
            reject(err);
          }
          resolve(input);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
}

export async function updateAccount(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(input.saldo);
      await db.query(
        `UPDATE SistemaBancario.Conta 
         SET saldo = ${input.saldo ? input.saldo : undefined}
          WHERE SistemaBancario.Conta.num_conta = ${input.num_conta}
    `,
        function (err: string, result: any) {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
}

export async function findByAccount(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `SELECT * FROM SistemaBancario.Conta  
        WHERE SistemaBancario.Conta.num_conta = ${input.num_conta}  
       `,
        function (err: string, result: any) {
          if (err) {
            reject(err);
          }

          resolve(result);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
}
export async function findAllAccount(_input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `SELECT * FROM SistemaBancario.Conta`,
        function (err: string, result: any) {
          if (err) {
            reject(err);
          }

          resolve(result);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
}

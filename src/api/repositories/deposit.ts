import { db } from '../../config/database';

export async function createDeposit(input: any): Promise<any> {
  const { agencia, num_conta, nome, CPF } = input;

  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `INSERT  INTO SistemaBancario.Deposito VALUES(${agencia},${num_conta},${nome},${CPF})`,
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

export async function updateDeposit(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `UPDATE SistemaBancario.Deposito 
    SET agencia = ${input.agencia ? input.agencia : undefined}
    SET num_conta = ${input.num_conta ? input.num_conta : undefined}
    SET nome = ${input.nome ? input.nome : undefined}
    SET CPF = ${input.CPF ? input.CPF : undefined}
    
    WHERE SistemaBancario.Deposito.id = ${input.id} 
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

export async function findByDeposit(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `SELECT * FROM SistemaBancario.Deposito  
        WHERE SistemaBancario.Deposito.id = ${input.id}  
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
import { db } from '../../config/database';

export async function createTransaction(input: any): Promise<any> {
  const { id_titular, id, titular_nome, Depósito_agencia, Saque_num_conta } = input;

  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `INSERT  INTO SistemaBancario.Transação VALUES(${id_titular},${id},${titular_nome},${Depósito_agencia},${Saque_num_conta})`,
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

export async function updateTransaction(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `UPDATE SistemaBancario.Transação 
    SET id_titular = ${input.id_titular ? input.id_titular : undefined}
    SET id = ${input.id ? input.id : undefined}
    SET titular_nome = ${input.titular_nome ? input.titular_nome : undefined}
    SET Depósito_agencia = ${input.Depósito_agencia ? input.Depósito_agencia : undefined}
    SET Saque_num_conta = ${input.Saque_num_conta ? input.Saque_num_conta : undefined}
    
    WHERE SistemaBancario.Agencia.id = ${input.id} 
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

export async function findByTransaction(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `SELECT * FROM SistemaBancario.Transação  
        WHERE SistemaBancario.Transação.id = ${input.id}  
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

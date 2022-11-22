import { db } from '../../config/database';

export async function createWithdraw(input: any): Promise<any> {
  const { num_conta, senha_conta } = input;

  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `INSERT  INTO SistemaBancario.Saque VALUES(${num_conta},${senha_conta}})`,
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

export async function updateWithdraw(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `UPDATE SistemaBancario.Saque 
    SET num_conta = ${input.num_conta ? input.num_conta : undefined}
    SET senha_conta = ${input.senha_conta ? input.senha_conta : undefined}
    
    WHERE SistemaBancario.Saque.id = ${input.id} 
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

export async function findByWithdraw(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `SELECT * FROM SistemaBancario.Saque  
        WHERE SistemaBancario.Saque.id = ${input.id}  
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
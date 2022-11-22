import { db } from '../../config/database';

export async function createHolder(input: any): Promise<any> {
  const { nome, endereço, Conta_num_conta, id } = input;

  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `INSERT  INTO SistemaBancario.Titular VALUES(${nome},${endereço},${Conta_num_conta}, ${id})`,
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

export async function updateHolder(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `UPDATE SistemaBancario.Titular 
    SET nome = ${input.nome ? input.nome : undefined}
    SET endereço = ${input.endereço ? input.endereço : undefined}
    SET Conta_num_conta = ${input.Conta_num_conta ? input.Conta_num_conta : undefined}
    SET id = ${input.id ? input.id : undefined
        }
    
    WHERE SistemaBancario.Titular.id = ${input.id} 
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

export async function findByHolder(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `SELECT * FROM SistemaBancario.Titular  
        WHERE SistemaBancario.Titular.id = ${input.id}  
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

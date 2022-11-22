import { db } from '../../config/database';

export async function createLogin(input: any): Promise<any> {
  const { agencia_num, senha_login, Conta_num_conta1 } = input;

  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `INSERT  INTO SistemaBancario.Login VALUES(${agencia_num},${senha_login},${Conta_num_conta1})`,
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

export async function updateLogin(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `UPDATE SistemaBancario.Login
    SET agencia_num = ${input.agencia_num ? input.agencia_num : undefined}
    SET senha_login = ${input.senha_login ? input.senha_login : undefined}
    SET Conta_num_conta1 = ${input.Conta_num_conta1 ? input.Conta_num_conta1 : undefined}
    
    WHERE SistemaBancario.Login.id = ${input.id} 
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

export async function findByLogin(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `SELECT * FROM SistemaBancario.Login  
        WHERE SistemaBancario.Login.id = ${input.id}  
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

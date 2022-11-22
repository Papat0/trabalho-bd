import { db } from '../../config/database';

export async function createAgency(input: any): Promise<any> {
  const { agencia, telefone, endereço, Login_agencia_num, id } = input;

  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `INSERT INTO SistemaBancario.Agencia (agencia, telefone, endereço, Login_agencia_num, id) VALUES(${agencia},"${telefone}","${endereço}",${Login_agencia_num},"${id}")`,
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

export async function updateAgency(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `UPDATE SistemaBancario.Agencia 
    SET agencia = ${input.agencia ? input.agencia : undefined}
    SET telefone = ${input.telefone ? input.telefone : undefined}
    SET endereço = ${input.endereço ? input.endereço : undefined}
    SET Login_agencia_num = ${
      input.Login_agencia_num ? input.Login_agencia_num : undefined
    }
    
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

export async function findByAgency(input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `SELECT * FROM SistemaBancario.Agencia  
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
export async function findAllAgency(_input: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await db.query(
        `SELECT * FROM SistemaBancario.Agencia  
   
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

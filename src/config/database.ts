import { createConnection } from 'mysql';

export const db: any = createConnection({
  host: <string>process.env.DB_HOST,
  database: <string>process.env.DB_NAME,
  user: <string>process.env.DB_USER,
  password: <string>process.env.DB_PASS,
  port: parseInt(<string>process.env.DB_PORT, 10)
});

export default async function syncDB(): Promise<void> {
  return await db.connect(function (err: any) {
    if (err) throw err;
    console.log('Connected!');
  });
}

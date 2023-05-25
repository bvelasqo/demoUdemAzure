import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola desde el API en Azure App Service!');
});

app.listen(port, () => {
  console.log(`El API está escuchando en el puerto ${port}`);
});
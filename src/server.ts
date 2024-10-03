import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { dbConnection } from './database/connection';

// Importar rutas
import bibliotecaRoutes from './routes/bibliotecas.routes';
import autorRoutes from './routes/autores.routes';
import libroRoutes from './routes/libros.routes';

export class Server {
  private app: Application;
  private port: string;
  private api_paths = {
    home: '/api/v1/home',
    bibliotecas: '/api/v1/bibliotecas',
    autores: '/api/v1/autores',
    libros: '/api/v1/libros',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';

    // Conectar a la base de datos
    dbConnection();

    // Métodos iniciales
    this.middlewares();

    // Definir rutas
    this.routes();
  }

  mi_primera_api() {
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).json({ msg: 'API funcionando' });
    });
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Ruta principal
    this.mi_primera_api();
  }

  // Definir las rutas
  routes(): void {
    this.app.use(this.api_paths.bibliotecas, bibliotecaRoutes);
    this.app.use(this.api_paths.autores, autorRoutes);
    this.app.use(this.api_paths.libros, libroRoutes);
  }

  // Escuchar en el puerto definido
  listen(): void {
    this.app.listen(this.port, () => {
      console.log('El servidor está corriendo en el puerto', this.port);
    });
  }
}

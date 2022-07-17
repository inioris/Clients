import * as compression from 'compression';
import * as cors from 'cors';
import { createApp } from './skeleton/createApp';
import * as BodyParser from 'body-parser';
import appMiddlewares from './app.middlewares';
import MassiveImport from './utils/masiveImport';

export async function buildApp(config: any) {
  const app = await createApp(config);

  // App Middlewares
  app.use(compression());
  app.use(cors());
  app.use(BodyParser.urlencoded({ extended: false }));
  app.use(BodyParser.json());

  app.set('appMiddlewares', appMiddlewares);

  // Services
  // set the service dir for searching all services into services directory
  const servicesDir = `${__dirname}/services/**/*.service{.ts,.js}`;

  // get all services importing them with masiveImportUtilsTest function
  const services = MassiveImport.getInstance(servicesDir);

  if (services && services.length) {
    // register all services
    services.forEach(service => service.register(app));
  }

  return app;
}

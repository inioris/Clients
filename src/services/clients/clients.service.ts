import { createService, registerService } from '../../skeleton/services';
import UsersMiddlewares from './clients.middlewares';
import ClientsEntity from './clients.entity';

export default registerService<ClientsEntity>(() => ({
  name: 'clients',
  entity: 'clients',
  service: createService<ClientsEntity>(ClientsEntity),
  middlewares: UsersMiddlewares,
}));

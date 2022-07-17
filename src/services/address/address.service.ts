import { createService, registerService } from '../../skeleton/services';
import AddressEntity from './address.entity';
import AddressMiddleware from './address.middlewares';

export default registerService<AddressEntity>(() => ({
  name: 'address',
  entity: 'address',
  service: createService<AddressEntity>(AddressEntity),
  middlewares: AddressMiddleware,
}));

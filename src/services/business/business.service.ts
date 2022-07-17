import { createService, registerService } from '../../skeleton/services';
import ProductsMiddlewares from './business.middlewares';
import BusinessEntity from './business.entity';
import IAppProvider from '../../skeleton/services/IAppProvider';

export default registerService<BusinessEntity>((app: IAppProvider) => ({
  name: 'business',
  entity: 'business',
  service: createService<BusinessEntity>(BusinessEntity),
  middlewares: ProductsMiddlewares(app),
}));

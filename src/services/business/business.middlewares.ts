import { IMiddlewaresSchema } from '../../skeleton/services/IMiddlewaresSchema';
import IAppProvider from '../../skeleton/services/IAppProvider';
import { validateRequest } from '../../middlewares/validateRequest.middleware';

const relations = ['name'];
const middlewares = (_app: IAppProvider): IMiddlewaresSchema =>  ({
  before: {
    all: [],
    find: [],
    get: [],
    create: [validateRequest(relations)],
    update: [validateRequest(relations)],
    delete: [],
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    delete: [],
  },
});

export default middlewares;

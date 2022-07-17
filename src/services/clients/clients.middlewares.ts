import { IMiddlewaresSchema } from '../../skeleton/services/IMiddlewaresSchema';
import { getRelationsMiddleware } from '../../middlewares/getRelations.middleware';

const middlewares: IMiddlewaresSchema = {
  before: {
    all: [],
    find: [getRelationsMiddleware(['address'])],
    get: [getRelationsMiddleware(['address'])],
    create: [],
    update: [],
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
};

export default middlewares;

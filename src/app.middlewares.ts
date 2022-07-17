import { IMiddlewaresSchema } from './skeleton/services/IMiddlewaresSchema';
import { sendResponse } from './skeleton/middlewares';

const middlewares: IMiddlewaresSchema = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    delete: [],
  },
  after: {
    all: [sendResponse()],
    find: [],
    get: [],
    create: [],
    update: [],
    delete: [],
  },
};

export default middlewares;

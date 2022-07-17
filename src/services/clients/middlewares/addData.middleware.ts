import { get, isObject } from 'lodash';
import { getRepository } from 'typeorm';
import AddressEntity from './../../address/address.entity';

export const AddDataMiddleware = () => async (req, _res, next) => {

  if (isNaN(get(req, 'body.business'))) {
    if (isObject(get(req, 'body.business'))) {
      await getRepository(AddressEntity).insert(get(req, 'body.business.name')).then((res: any) => {
        req.body.business = Number(res.result.id);
      });
    }
  }

  next();
};

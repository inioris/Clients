import { set } from 'lodash';
// import * as moment from 'moment-timezone';

const addDateInPostAndUpdate = (req, _res, next) => {

  // const dant = `${moment.tz(new Date(), 'America/New_York').format('YYYY-MM-DDThh:mm:ss')}.000Z`;

  set(req.body, 'createdAt', new Date());
  set(req.body, 'updatedAt', new Date());
  next();
};

export default addDateInPostAndUpdate;

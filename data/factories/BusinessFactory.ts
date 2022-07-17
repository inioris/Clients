import { define, FactoryStatic } from '../index';
import { getConnection } from 'typeorm';
import BusinessEntity from '../../src/services/business/business.entity';

const data = [
  {
    name: 'OrionTek',
  },
  {
    name: 'Universidad Unphu',
  },
];

define(BusinessEntity, async (
  _faker: Faker.FakerStatic,
  _factory: FactoryStatic,
  count?: number)
  : Promise<BusinessEntity> => {
  const entity = new BusinessEntity();
  entity.name = data[count as number].name;
  return entity;
},     getConnection() as any);

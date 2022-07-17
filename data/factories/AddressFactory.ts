import { define, FactoryStatic } from '../index';
import { getConnection } from 'typeorm';
import AddressEntity from '../../src/services/address/address.entity';

const data: any = [
  {
    street: 'KM 25 aut duarte',
    postalCode: '28021',
    numberHome: '8',
    enabled: 1,
    client: 1,
  },
  {
    street: 'KM 18 aut duarte',
    postalCode: '28030',
    numberHome: '28',
    enabled: 1,
    client: 1,
  },
];

define(AddressEntity, async (
  _faker: Faker.FakerStatic,
  _factory: FactoryStatic,
  count?: number)
  : Promise<AddressEntity> => {
  const entity = new AddressEntity();
  entity.street = data[count as number].street;
  entity.postalCode = data[count as number].postalCode;
  entity.client = data[count as number].client;
  entity.numberHome = data[count as number].numberHome;
  entity.enabled = data[count as number].enabled;
  return entity;
},     getConnection() as any);

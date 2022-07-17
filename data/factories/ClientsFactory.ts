import { define, FactoryStatic } from '../index';
import { getConnection } from 'typeorm';
import ClientsEntity from '../../src/services/clients/clients.entity';

const data = [
  {
    name: 'Alejandro Ramirez',
    userName: 'inioris',
    email: 'inioris1@gmail.com',
    business: 1,
  },
];

define(ClientsEntity, async (
  _faker: Faker.FakerStatic,
  _factory: FactoryStatic,
  count?: number)
  : Promise<ClientsEntity> => {
  const entity = new ClientsEntity();
  entity.name = data[count as number].name;
  entity.userName = data[count as number].userName;
  entity.email = data[count as number].email;
  entity.business = data[count as number].business;
  return entity;
},     getConnection() as any);

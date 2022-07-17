import { FactoryStatic, Seeder } from '../index';
import ClientsEntity from '../../src/services/clients/clients.entity';

export default class ClientsSeeder implements Seeder {
  async seed(factory:FactoryStatic): Promise<void> {
    await factory.get(ClientsEntity).createMany(1);
  }
}

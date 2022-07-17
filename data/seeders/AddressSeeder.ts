import { FactoryStatic, Seeder } from '../index';
import AddressEntity from '../../src/services/address/address.entity';

export default class AddressSeeder implements Seeder {
  async seed(factory:FactoryStatic): Promise<void> {
    await factory.get(AddressEntity).createMany(2);
  }
}

import { FactoryStatic, Seeder } from '../index';
import BusinessEntity from '../../src/services/business/business.entity';

export default class BusinessSeeder implements Seeder {
  async seed(factory:FactoryStatic): Promise<void> {
    await factory.get(BusinessEntity).createMany(2);
  }
}

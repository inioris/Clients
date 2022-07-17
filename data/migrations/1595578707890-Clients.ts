import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Clients1595578707890 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
    const table = new Table({
      name: 'Clientes',
      columns: [
        {
          name: 'IdCliente',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'Nombre',
          type: 'varchar',
          length: '100',
        },
        {
          name: 'Usuario',
          type: 'varchar',
          length: '50',
          isUnique: true,
        },
        {
          name: 'Email',
          type: 'varchar',
          length: '100',
          isUnique: true,
        },
        {
          name: 'IdEmpresa',
          type: 'int',
        },
      ],
    });

    await queryRunner.createTable(table, true);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('Clientes');
  }
}

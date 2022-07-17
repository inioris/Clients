import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Business1595579355081 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    const table = new Table({
      name: 'Empresa',
      columns: [
        {
          name: 'IdEmpresa',
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
      ],
    });

    await queryRunner.createTable(table, true);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('Empresa');
  }
}

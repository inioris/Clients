import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Address1595579322621 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    const table = new Table({
      name: 'Direccion',
      columns: [
        {
          name: 'IdDireccion',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'Calle',
          type: 'varchar',
          length: '200',
        },
        {
          name: 'CodigoPostal',
          type: 'varchar',
          length: '10',
        },
        {
          name: 'NumeroCasa',
          type: 'varchar',
          length: '10',
          isNullable: true,
        },
        {
          name: 'IdCliente',
          type: 'int',
        },
        {
          name: 'EsPrincipal',
          type: 'bit',
          isNullable: true,
        },
      ],
    });

    await queryRunner.createTable(table, true);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('Direccion');
  }
}

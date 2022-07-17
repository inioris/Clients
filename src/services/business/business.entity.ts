import { Entity, PrimaryGeneratedColumn, Column, BaseEntity }
  from 'typeorm';

@Entity('Empresa')
export default class BusinessEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'IdEmpresa' })
  id: number;

  @Column({ name: 'Nombre', length: '150' })
  name: string;

}

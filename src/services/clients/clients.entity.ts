import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, JoinColumn}
  from 'typeorm';
import AddressEntity from '../address/address.entity';
import BusinessEntity from '../business/business.entity';

@Entity('Clientes')
export default class ClientsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'IdCliente' })
  id: number;

  @Column({ name: 'Nombre', length: '100' })
  name: string;

  @Column({ name: 'Usuario', length: '150', unique:true })
  userName: string;

  @Column({ name: 'Email', length:'100', unique: true })
  email: string;

  @ManyToOne(() => BusinessEntity, {eager: true})
  @JoinColumn({ name: 'IdEmpresa' })
  business: BusinessEntity;

  @OneToMany(() => AddressEntity, address => address.client)
  address: AddressEntity | null;

}

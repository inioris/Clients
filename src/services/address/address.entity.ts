import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne}
  from 'typeorm';
import ClientsEntity from '../clients/clients.entity';


@Entity('Direccion')
export default class AddressEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'IdDireccion' })
  id: number;

  @Column({ name: 'Calle', length: '200' })
  street: string;

  @Column({ name: 'CodigoPostal', length: '8' })
  postalCode: string;

  @Column({ name: 'NumeroCasa', length: '10' })
  numberHome: string;

  @ManyToOne(() => ClientsEntity, { eager: true })
  @JoinColumn({ name: 'IdCliente' })
  client: ClientsEntity;

  @Column({ name: 'EsPrincipal', default: false })
  enabled: boolean;

}

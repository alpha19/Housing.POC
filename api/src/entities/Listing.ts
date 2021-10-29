import {
	BaseEntity,
	Column,
	PrimaryGeneratedColum,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne
} from 'typeorm';

import { City } from '.';

@Entity()
class Listing extends BaseEntity {
	@PrimaryGeneratedColum
	id: number;

  	@CreateDateColumn({ type: 'timestamp' })
  	createdAt: Date;

  	@UpdateDateColumn({ type: 'timestamp' })
  	updatedAt: Date;

  	@Column('text')
  	price: string;

  	@Column('text')
  	address: string;

  	@Column('text')
  	link: string;

  	@ManyToOne (
  		() => City,
  		city => city.listings,
  		{ onDelete: 'CASCADE' },
  	)
  	city: City;
}

export default Listing;
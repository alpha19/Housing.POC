import {
	BaseEntity,
	Column,
	PrimaryGeneratedColum,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany
} from 'typeorm';

import { Listing } from '.';

@Entity()
class City extends BaseEntity {
	@PrimaryGeneratedColum
	id: number;

  	@CreateDateColumn({ type: 'timestamp' })
  	createdAt: Date;

  	@UpdateDateColumn({ type: 'timestamp' })
  	updatedAt: Date;

  	@Column('text')
  	city: string;

  	@Column('text')
  	state: string;

  	@OneToMany (
  		() => Listing,
  		listing => listing.city,
  	)
  	listings: Listing[];
}

export default City;
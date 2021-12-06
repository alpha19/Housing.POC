import {
	BaseEntity,
  Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany
} from 'typeorm';

import { Listing } from '.';

@Entity()
class City extends BaseEntity {
	@PrimaryGeneratedColumn()
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
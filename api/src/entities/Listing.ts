import {
	BaseEntity,
  Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne
} from 'typeorm';

import { City } from '.';

@Entity()
class Listing extends BaseEntity {
	@PrimaryGeneratedColumn()
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

	@Column('text')
	thumbnail: string;

	@ManyToOne (
		() => City,
		city => city.listings,
		{ onDelete: 'CASCADE' },
	)
	city: City;
}

export default Listing;
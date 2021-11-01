import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

import { City, Listing } from 'entities';

import { EntityNotFoundError } from 'utils/errors';

type EntityType = typeof City | typeof Listing;
type EntityInstance = City | Listing;

const entities: { [key: string]: EntityType } = { City, Listing };

export const findEntityOrThrow = async <T extends EntityTypes>(
	type: T,
	id: number | string,
	options?: FindOneOptions) : Promise<InstanceType<T>> => {
	const instance = await type.findOne(id, options);

	if(!instance) {
		throw new EntityNotFoundError(entityType.Name);
	}

	return instance;
}

export const saveEntity = async <T extends EntityInstance>(instance: T): Promise<T> => {
	/* Validations ??? */
	return instance.save() as Promise<T>;
}

export const createEntity = async <T extends EntityType>(type: EntityType, input: Partial<InstanceType<T>>
	) : Promise<InstanceType<T>> => {
	const instance = type.create(input);
	return saveEntity(instance);
}

export const updateEntity = async<T extends EntityType>(type: EntityType,
	id: number| string, input: Partial<InstanceType<T>>): Promise<InstanceType<T>> => {
	const instance = findEntityOrThrow(type, id);
	Object.assign(instance, input);
	return saveEntity(instance);
}

export const deleteEntity = async<T extends EntityType>(type: EntityType, id: number | string): Promise<InstanceType<T>> =>
{
	const instance = findEntityOrThrow(type, id);
	await instance.remove();
	return instance;
}


export { default as City } from './City';
export { default as Listing } from './Listing';
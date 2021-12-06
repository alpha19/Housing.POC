import { catchErrors } from 'utils/error';

import { City, Listing, findEntityOrThrow, updateEntity, deleteEntity, createEntity } from 'entities';

export const get = catchErrors(async (req, res) => {
	const city = await findEntityOrThrow(City, req.params.cityId);
	res.send({ city });
});

export const create = catchErrors(async (req, res) => {
  const city = await createEntity(City, req.body);
  res.send({ city });
});

export const update = catchErrors(async (req, res) => {
  const city = await updateEntity(City, req.params.cityId, req.body);
  res.send({ city });
});

export const remove = catchErrors(async (req, res) => {
  const city = await deleteEntity(City, req.params.cityId);
  res.send({ city });
});

export const getCities = catchErrors(async (_req, res) => {
	let cities = await Listing.createQueryBuilder('city')
		.select()
    	.getMany();

    res.send({ cities });
});
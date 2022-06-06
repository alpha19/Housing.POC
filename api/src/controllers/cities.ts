import { catchErrors } from 'utils/error';

import { City, findEntityOrThrow, updateEntity, deleteEntity, createEntity } from 'entities';

export const get = catchErrors(async (req, res) => {
	const city = await findEntityOrThrow(City, req.params.id);
	res.json({ city });
});

export const create = catchErrors(async (req, res) => {
  const city = await createEntity(City, req.body);
  res.json({ city });
});

export const update = catchErrors(async (req, res) => {
  const city = await updateEntity(City, req.params.id, req.body);
  res.json({ city });
});

export const remove = catchErrors(async (req, res) => {
  const city = await deleteEntity(City, req.params.id);
  res.json({ city });
});

export const getCities = catchErrors(async (_req, res) => {
	let cities = await City.createQueryBuilder('city')
		.select()
    .getMany();

    res.json({ cities });
});
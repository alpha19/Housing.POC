import { City } from 'entities';

import { catchErrors } from 'utils/error';

import { updateEntity, deleteEntity, createEntity } from 'entities';

export const get = catchErrors(async (req, res)) => {
	const city = findEntityOrThrow(City, req.params.listingId);
	req.respond( { listing });
}

export const create = catchErrors(async (req, res) => {
  const city = await createEntity(City, req.body);
  res.respond({ city });
});

export const update = catchErrors(async (req, res) => {
  const city = await updateEntity(City, req.params.cityId, req.body);
  res.respond({ city });
});

export const remove = catchErrors(async (req, res) => {
  const city = await deleteEntity(City, req.params.cityId);
  res.respond({ city });
});
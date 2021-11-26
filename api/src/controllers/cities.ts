import { City } from 'entities';

import { catchErrors } from 'utils/error';

import { updateEntity, deleteEntity, createEntity } from 'entities';

export const getAll = catchErrors(async (req, res)) => {

});

export const get = catchErrors(async (req, res)) => {
	const city = findEntityOrThrow(City, req.params.cityId);
	req.respond( { listing });
});

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

export const getCities = catchErrors(async (req, res) => {

	let cities = await Listing.createQueryBuilder('city')
		.select()
    	.getMany();

    res.respond({ cities });
});
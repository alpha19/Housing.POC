import { Listing, City } from 'entities';

import { catchErrors } from 'utils/error';

import { updateEntity, deleteEntity, createEntity } from 'entities';

export const get = catchErrors(async (req, res)) => {
	const listing = findEntityOrThrow(Listing, req.params.listingId);
	req.respond( { listing });
}

export const create = catchErrors(async (req, res) => {
  const listing = await createEntity(Listing, req.body);
  res.respond({ listing });
});

export const update = catchErrors(async (req, res) => {
  const listing = await updateEntity(Listing, req.params.listingId, req.body);
  res.respond({ listing });
});

export const remove = catchErrors(async (req, res) => {
  const listing = await deleteEntity(Listing, req.params.listingId);
  res.respond({ listing });
});

export const queryAndUpdate = catchErrors(async (req, res) => {
	// Retrieve the city via :cityId

	// Delete the current listings associated with the city (if applicable)

	// Query web API for new listings

	// Save new listings in db
});
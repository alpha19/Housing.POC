import { Listing, City } from 'entities';

import { catchErrors } from 'utils/error';

import { updateEntity, deleteEntity, createEntity } from 'entities';

import api from 'services/realty-us'

export const create = catchErrors(async (req, res) => {
  const listing = await createEntity(Listing, req.body);
  res.respond({ listing });
});

export const remove = catchErrors(async (req, res) => {
  const listing = await deleteEntity(Listing, req.params.listingId);
  res.respond({ listing });
});

export const updateListingsByCityId = catchErrors(async (req, res) => {
	const { cityId } = req.params.cityId;

	// Delete all the returned listings
	const listings = getListings(cityId);
	for (var listing in listings)
	{
		await deleteEntity(Listing, listing.listingId);
	}
	listings = []

	// Query for new listings
	const city = findEntityOrThrow(City, req.params.cityId);

	const params = {
		city: city.city,
		state_code: city.state,
		offset: 0,
		limit: 20,
		sort: 'relevance'
	}

	api.get('/properties/v2/list-for-sale', params).then(
		data => {
			// Update listings based on results of query
			for(var key in body["properties"])
			{
				const listing = await createEntity(Listing) ({
					price: key["price"],
					address: key["address"]["line"],
					link: key["rdc_web_url"],
				});

				listings.push(property);
			}
		},
	);

	res.respond({ listings });
});

export const getListingsByCityId = catchErrors(async (req, res)) => {
	const { cityId } = req.params.cityId;
	const listings = getListings(cityId);
    res.respond({ listings });
}

const getListings = (cityId) => {
	const whereSQL = 'listing.cityId = :cityId';

	let listings = await Listing.createQueryBuilder('listing')
		.select()
		.where(whereSQL)
    	.getMany();

    return listings;
}
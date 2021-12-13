import { Listing, City } from 'entities';

import { catchErrors } from 'utils/error';

import { deleteEntity, createEntity, findEntityOrThrow } from 'entities';

import api from 'services/realty-us';

export const create = catchErrors(async (req, res) => {
  const listing = await createEntity(Listing, req.body);
  res.send({ listing });
});

export const remove = catchErrors(async (req, res) => {
  const listing = await deleteEntity(Listing, req.params.listingId);
  res.send({ listing });
});

export const updateListingsByCityId = catchErrors(async (req, res) => {
	const cityId = req.params.cityId;

	// Delete all the returned listings
	let listings = await getListings(cityId);
	for (var listing of listings)
	{
		await deleteEntity(Listing, listing.id);
	}

	listings = []

	// Query for new listings
	const city = await findEntityOrThrow(City, req.params.cityId);

	const params = {
		city: city.city,
		state_code: city.state,
		offset: 0,
		limit: 20,
		sort: 'relevance'
	}

	await api.get('/properties/v2/list-for-sale', params).then(
		async (data: any) => {
			// Update listings based on results of query
			for(var key of data["properties"])
			{
				const listing = await createEntity(Listing, {
					price: key["price"],
					address: key["address"]["line"],
					link: key["rdc_web_url"],
				});

				listings.push(listing);
			}
		},
	);

	res.send({ listings });
});

export const getListingsByCityId = catchErrors(async (req, res) => {
	const cityId = req.params.cityId;
	const listings = await getListings(cityId);
    res.send({ listings });
});

const getListings = async (cityId: string): Promise<Array<Listing>> => {
	const whereSQL = 'listing.cityId = :cityId';

	let listings = await Listing.createQueryBuilder('listing')
		.select()
		.where(whereSQL, { cityId })
    	.getMany();

    return listings;
};
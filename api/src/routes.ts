import * as cities from 'controllers/cities'
import * as listings from 'controllers/listings'

export const attachPrivateRoutes = (app: any): void => {
  app.post('/api/city', cities.create);
  app.get('/api/city/:cityId', cities.get);
  app.put('/api/city/:cityId', cities.update);
  app.delete('/api/city/:cityId', cities.remove);	

  app.get('/api/cities', cities.getCities);

  app.post('/api/listing', listings.create);
  app.delete('/api/listing/:listingId', listings.remove);

  app.put('/api/listings/:cityId', listings.updateListingsByCityId);
  app.get('/api/listings/:cityId', listings.getListingsByCityId);
}
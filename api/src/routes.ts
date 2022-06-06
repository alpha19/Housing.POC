import * as cities from 'controllers/cities'
import * as listings from 'controllers/listings'

export const attachPrivateRoutes = (app: any): void => {
  app.post('/api/city', cities.create);
  app.get('/api/city/:id', cities.get);
  app.put('/api/city/:id', cities.update);
  app.delete('/api/city/:id', cities.remove);	

  app.get('/api/cities', cities.getCities);

  app.post('/api/listing', listings.create);
  app.delete('/api/listing/:id', listings.remove);

  app.put('/api/listings/:cityId', listings.updateListingsByCityId);
  app.get('/api/listings/:cityId', listings.getListingsByCityId);
}
const { getProduct } = require('../app/services/product.service');
const products = require('../app/utils/data'); // Assuming this path needs to be adjusted based on the test file location

describe('getProduct function tests', () => {
  it('should return all products correctly', async () => {
    const req = {}; // Mock request object as needed
    const res = {
      send: jest.fn(),
    }; // Mock response object

    const response = await getProduct(req, res);
    console.log(response);
    expect(response).toEqual(products);
  });
});

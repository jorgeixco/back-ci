const {
  getProductController,
} = require('../app/controllers/product.controller');
const { getProduct } = require('../app/services/product.service');
jest.mock('../app/services/product.service'); // Mock the getProduct service

describe('getProductController', () => {
  let mockRequest;
  let mockResponse;
  let mockSend;
  let mockStatus;

  beforeEach(() => {
    // Setup mocks for each test
    mockSend = jest.fn();
    mockStatus = jest.fn().mockReturnValue({ send: mockSend });
    mockResponse = { status: mockStatus };
    mockRequest = {}; // Mock request as needed
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  test('calls getProduct with correct parameters', async () => {
    await getProductController(mockRequest, mockResponse);
    expect(getProduct).toHaveBeenCalledWith(mockRequest, mockResponse);
  });

  test('successfully returns products with a 200 status code', async () => {
    const mockProducts = [{ id: 1, name: 'Test Product' }];
    getProduct.mockResolvedValue(mockProducts); // Mock successful response

    await getProductController(mockRequest, mockResponse);

    expect(mockStatus).toHaveBeenCalledWith(200);
    expect(mockSend).toHaveBeenCalledWith(mockProducts);
  });

  test('handles errors gracefully', async () => {
    getProduct.mockRejectedValue(new Error('Test error')); // Simulate an error

    await getProductController(mockRequest, mockResponse);

    // Assuming the controller handles errors by sending a 500 status code
    expect(mockStatus).toHaveBeenCalledWith(500);
    expect(mockSend).toHaveBeenCalled(); // Check if any response was sent
  });
});

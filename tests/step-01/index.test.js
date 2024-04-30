test('Basic Jest Test (Enhanced)', () => {
  // Test for strict equality (===)
  expect(1).toBe(1);

  // Test for truthiness
  expect(1).toBeTruthy();

  // Test for falsiness (optional)
  expect(0).toBeFalsy(); // You can uncomment this line if needed

  // Test for specific data type
  expect(typeof 1).toBe('number');

  // Test for a specific value within an array or object (more complex scenarios)
  // ... (add these tests based on your specific data structures)
});

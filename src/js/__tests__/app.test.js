import playerHealtStatus from '../app';

describe('should return health status', () => {
  test('is healthy status', () => {
    const healthyResult = playerHealtStatus({ name: 'Маг', health: 90 });

    expect(healthyResult).toBe('healthy');
  });

  test('is wounded status', () => {
    const woundedResult = playerHealtStatus({ name: 'Маг', health: 50 });

    expect(woundedResult).toBe('wounded');
  });

  test('is critical status', () => {
    const criticalResult = playerHealtStatus({ name: 'Маг', health: 10 });

    expect(criticalResult).toBe('critical');
  });
});

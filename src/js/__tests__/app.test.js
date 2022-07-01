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

// альтернативный вариант
test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])(
  'should return %o player %s health status',
  // eslint-disable-next-line no-unused-vars
  (player, status) => {
    expect(playerHealtStatus(player)).toBe(status);
  },
);

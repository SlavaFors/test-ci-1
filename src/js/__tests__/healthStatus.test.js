import healthStatusBar from '../app';

test.each([
  [100, 'healthy'],
  [51, 'healthy'],
  [50, 'wounded'],
  [21, 'wounded'],
  [15, 'wounded'],
  [14, 'critical'],
])('health status bar should return right values', (healthStatus, expected) => {
  const result = healthStatusBar(healthStatus);
  expect(result).toBe(expected);
});
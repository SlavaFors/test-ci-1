/* eslint-disable no-unused-vars */
import checkHealthBar from '../healthBar';

test.each(
  [
    { name: 'Маг', health: 90, expected: 'healthy' },
    { name: 'Маг', health: 50, expected: 'wounded' },
    { name: 'Маг', health: 10, expected: 'critical' },
  ],
)('testing character $name, with $health health', ({ name, health, expected }) => {
  const result = checkHealthBar({ name, health });
  expect(result).toBe(expected);
});

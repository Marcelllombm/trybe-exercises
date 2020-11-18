const weekdays = require('./bussinessDay')
const workdays = require('./bussinessDay')

test('Sunday is a week day', () => {
  expect(weekdays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workdays).not.toContain('Sunday');
});
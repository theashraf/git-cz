const issues = require('../../lib/questions/issues');

test('should match snapshot', () => {
  const question = issues.createQuestion();

  expect(question).toMatchSnapshot();
});

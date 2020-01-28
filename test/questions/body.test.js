const body = require('../../lib/questions/body');

test('should match snapshot', () => {
  const question = body.createQuestion();

  expect(question).toMatchSnapshot();
});

const breaking = require('../../lib/questions/breaking');

test('should match snapshot', () => {
  const question = breaking.createQuestion();

  expect(question).toMatchSnapshot();
});

import ErrorRepository from '../app';

const repository = new ErrorRepository();
repository.errors.set(404, 'Not Found');
repository.errors.set(500, 'Internal Server Error');
repository.errors.set(400, 'Bad Request');

test('error in base', () => {
  expect(repository.translate(500)).toBe('Internal Server Error');
});

test('no error in base', () => {
  expect(repository.translate(501)).toBe('Unknown error');
});
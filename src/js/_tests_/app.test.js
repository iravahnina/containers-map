import ErrorRepository from '../app';

test('Ошибка 1', () => {
    const ErrorRepository = new ErrorRepository();
    const recieved = ErrorRepository.translate('1');
    expect(recieved).toBe('Персонаж уже существует');
});

test('Ошибка 2', () => {
    const ErrorRepository = new ErrorRepository();
    const recieved = ErrorRepository.translate('2');
    expect(recieved).toBe('Неизвестная ошибка');
});
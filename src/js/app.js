export default class ErrorRepository {
    constructor() {
        this.repository = new Map([
            ['1', 'Персонаж уже существует'],
            ['2', 'Неизвестная ошибка'],
          ]);
    }
      
    translate(code) {
        return this.repository.get(code) || 'Unknown error';
    }
}
/**
 * Класс UserWidget отвечает за
 * отображение информации о имени пользователя
 * после авторизации или его выхода из системы
 * */

class UserWidget {
  constructor(element) {
    if (!element) {
      throw new Error('Элемент не передан');
    } 
    this.element = element
  }

  /* Получает информацию о текущем пользователе. Если пользователь авторизован, в элемент .user-name устанавливает имя авторизованного пользователя */
  update() {
    if(User.current()) {
      this.element.querySelector('.user-name').textContent = User.current().name;
     }
  }
}

/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  onSubmit(data) {
    // Регистрируем пользователя через User.register
    User.register(data, (err, response) => {
      if (err === null && response.success) {
        // При успешной регистрации сбрасываем форму
        this.element.reset();
        // При успешной регистрации задаем состояние 'user-logged'
        App.setState('user-logged');
        // Закрываем окно формы
        App.getModal('register').close();
      }
    });
  }
}
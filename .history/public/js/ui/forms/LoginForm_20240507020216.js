class LoginForm extends AsyncForm {
  onSubmit(data) {
    // Обращение к API для авторизации
    User.login(data, (err, response) => {
      if (err === null && response.success) {
        // При успешной авторизации сбрасываем форму
        this.element.reset();
        // Устанавливаем состояние "пользователь авторизован"
        App.setState('user-logged');
        // Закрываем окно формы
        App.getModal('login').close();
      }
    });
  }
}
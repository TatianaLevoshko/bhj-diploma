class Sidebar {
  // Запускает initAuthLinks и initToggleButton
   
  static init() {
    Sidebar.initAuthLinks();
    Sidebar.initToggleButton();
  }

  // Боковое меню
  static initToggleButton() {
    const body = document.querySelector('.sidebar-mini');
    const btn = document.querySelector('.sidebar-toggle');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.add('sidebar-open');
      body.classList.add('sidebar-collapse');
    });
  }

 // Вхов, регистрация, выход
  static initAuthLinks() {
    const login = document.querySelector('.menu-item_login');
    const register = document.querySelector('.menu-item_register');
    const logout = document.querySelector('.menu-item_logout');
    
    login.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('login').open();
    });
    
    register.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('register').open();
    });
    
  logout.addEventListener('click', () => {
    User.logout((response) => {
      if ((response && response.success) {
        localStorage.removeItem('user');
        App.setState('init');
        }
    });
  });
  }
}
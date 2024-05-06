class Modal {

  constructor(element) {
    if (!element) {
      throw new Error('Элемент не существует');
     {
      this.element = element;
      this.registerEvents();
    }
  }

  //  При нажатии на элемент с data-dismiss="modal" должен закрыть текущее окно (с помощью метода Modal.onClose)
  
  registerEvents() {
    const dismissElements = this.element.querySelectorAll('[data-dismiss="modal"]');
    dismissElements.forEach(element => {
      element.addEventListener('click', (e) => this.onClose(e));
    });
  }

  // Срабатывает после нажатия на элементы, закрывающие окно. Закрывает текущее окно (Modal.close())
  
  onClose(e) {
    this.close();
  }
  
  // Открывает окно: устанавливает CSS-свойство display

   open() {
    this.element.style.display = 'block';
  }
  
  // Закрывает окно: удаляет CSS-свойство display
  
  close() {
    this.element.style.display = 'none';
  }
}
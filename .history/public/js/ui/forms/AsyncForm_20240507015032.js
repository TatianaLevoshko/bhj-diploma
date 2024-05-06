class AsyncForm {
   
  // Сохраняет переданный элемент и регистрирует события через registerEvents()
  
  constructor(element) {
    if (!element) {
      throw new Error('Элемент не существует');
    }
      this.element = element;
      this.registerEvents();
  }

  // Запрещает странице перезагружаться при попытке успешной отправки. 
  // При успешной отправке вызывает метод submit

  registerEvents() {
    this.element.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submit();
    });
  }


    
    //  'название поля формы 1': 'значение поля формы 1',
    //  'название поля формы 2': 'значение поля формы 2'
  
  getData() {
    const formData = new FormData(this.element);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    return data;
  }

  onSubmit(options) {};
  
  //  Вызывает метод onSubmit и передаёт туда данные, полученные из метода getData()
   
  submit() {
    this.onSubmit(this.getData());
  }
}
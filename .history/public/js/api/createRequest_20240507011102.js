const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest;
  const formData = new FormData();

  xhr.responseType = 'json';

  let url = options.url;
	// Если метод запроса - GET, формирование строки параметров URL
  if (options.method == 'GET') {
    const params = new URLSearchParams(options.data);
    options.url += '?' + params.toString();
  } else {
    for(let key in options.data) {
        formData.append(key, options.data[key]);
    } 
  }
  
	try {
	  // Открытие соединения с сервером
		xhr.open(options.method, url);
		// Отправка запроса с данными
    xhr.send(formData);
	} catch (e) {
		// Обработка ошибок, возникающих при выполнении запроса
    console.log('catch' + e);
	};
	// Установка обработчика события загрузки ответа от сервера
	xhr.onload = () => {
	  // Вызов функции обратного вызова с результатом запроса
    options.callback(null, xhr.response);
	};
	// Установка обработчика события ошибки при выполнении запроса
  xhr.onerror = () => {  
    options.callback(xhr.statusText, null);
  };
};

const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();

  xhr.responseType = 'json';

  const url = options.url;

	// Если метод запроса - GET, формирование строки параметров URL
  if (options.method == 'GET') {
    const params = new URLSearchParams(options.data);
   con url += '?' + params.toString();
  } else {
    for(let key in options.data) {
        formData.append(key, options.data[key]);
    } 
  }
  
	try {
    xhr.open(options.method, url);
    xhr.send(options.method === 'GET' ? null : formData);
  } catch (e) {
    console.log('catch' + e);
  }

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      options.callback(null, xhr.response);
    } else {
      options.callback('Request failed with status ' + xhr.status, null);
    }
  };

  xhr.onerror = () => {  
    options.callback(xhr.statusText, null);
  };
};

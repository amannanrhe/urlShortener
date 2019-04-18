/**
 * Add event Listner for form on load
 */
window.onload = () => {
    document.querySelector('form').addEventListener('submit', handleURLSubmit);
};

/**
 * Hnadles form submit. If valid url make request to api to shorten url.
 * 
 * @param {*} event - form event
 */
const handleURLSubmit = event => {
    event.preventDefault();

    const url = document.querySelector('#urlInput').value,
          messageContainer = document.querySelector('.message-container'),
          errorContainer = document.querySelector('.error-container');
          message = document.querySelector('.message');

          console.log(url);

    if (urlCheck(url)) {
        fetch('/api/add', {
            method: 'post',
            headers: {
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `url=${url}`
          })
          .then(data => {
                data.json().then(data => {
                    messageContainer.classList.remove('hidden');
                    errorContainer.classList.add('hidden');
                    message.innerHTML = data.url;
                    message.href = data.url;
                })
          })
          .catch((e)=> {
            displayErrorMsg(messageContainer, errorContainer)
        });
    } else {
        displayErrorMsg(messageContainer, errorContainer)
    }
};

/**
 * Show error message container and hide success message container
 * 
 * @param {element} messageContainer success message container
 * @param {element} errorContainer  error message container
 */
const displayErrorMsg = (messageContainer, errorContainer) => {
    messageContainer.classList.add('hidden');
    errorContainer.classList.remove('hidden');
}

/**
 * Chexk for valud url
 * 
 * @param {string} value Url to test
 */
const urlCheck = value => (/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/).test(value);
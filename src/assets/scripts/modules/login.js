// // import axios from 'axios';

// const form = document.querySelector('#authform');
// const loginBtn = document.querySelector('#loginBtn');


// loginBtn.addEventListener('click', function (e) {
//     e.preventDefault();


//     if (validateForm(form)) {
//         const data = {
//             name: form.elements.user.value,
//             password: form.elements.password.value,
//             // human: form.elements.human.value
//         };

        
//         const xhr = new XMLHttpRequest();
//         xhr.open('POST', 'https://webdev-api.loftschool.com/login');
//         xhr.send(JSON.stringify(data));
//         console.log(data.token);
//         // localStorage.setItem("token", data.token);
//         xhr.addEventListener('load', () => {
//             console.log("all done!");
        
//         // window.location.href = "/admin" 
//         });

//     } else {
//         console.log('smth wrong!')
//     }

//     function validateForm(form) {
//         let valid = true;

//         if (!validateField(form.elements.user)) {
//             valid = false;
//         }
//         if (!validateField(form.elements.password)) {
//             valid = false;
//         }
//         if (!validateField(form.elements.human)) {
//             valid = false;
//         }

//         return valid;
//     }

//     function validateField(field) {

//         // field.nextElementSibling.textContent = '';
//         // field.nextElementSibling.classList.remove('errorMessage');
//         // field.classList.remove('form__input-field--error');
//         // field.previousElementSibling.firstElementChild.classList.remove('form__input-icon--error');

//         if (!field.checkValidity()) {
//             // field.nextElementSibling.textContent = field.validationMessage;
//             // field.nextElementSibling.classList.remove('error');
//             // field.nextElementSibling.classList.add('errorMessage');
//             // field.classList.add('form__input-field--error');
//             // field.previousElementSibling.firstElementChild.classList.add('form__input-icon--error');
//             // setTimeout(() => {
//             //     field.nextElementSibling.textContent = '';
//             //     field.nextElementSibling.classList.remove('errorMessage');
//             // }, 2000)
//             return false;
//         } else {
//             // field.nextElementSibling.textContent = '';
//             return true;
//         }
//     }
// })

// import renderPopup from "./renderPopup";
// import validateForm from "./validateForm";

export function login(formSelector) {
    const form = document.querySelector(formSelector);
    form.setAttribute("novalidate", true);
  
    form.addEventListener("submit", submitListener);
  
    function submitListener(e) {
      e.preventDefault();
  
      // if (!validateForm(form)) return;
  
      ajaxLogin(form);
    }
  }
  
  function ajaxLogin(form) {
    const url = form.getAttribute("action");
    const type = form.getAttribute("method");
    const formData = new FormData(form);
    // const sadSmile = "=(((";
  
    fetch(url, { method: type, body: formData })
      .then(checkStatus)
      .then(response => response.json())
      .then(data => {
        const ttl = Math.floor(Date.now() / 1000 + data.ttl);
        localStorage.setItem("token", data.token);
        localStorage.setItem("ttl", ttl);
      })
      .then(() => {
        window.location.href = "/admin";
      })
      .catch(error => {
          console.log(error);
        // renderPopup(sadSmile, error);
      });
  
    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
  }
  
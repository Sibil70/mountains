// import axios from 'axios';

const   form = document.querySelector('#authform'),
        loginBtn = document.querySelector('#loginBtn'),
        authBtn = document.querySelectorAll('.js-toggleBtn'),
        cards = document.querySelectorAll('.user');
    // authBtnDisp = document.querySelector('.authbtn');


loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click');

    if (validateForm(form)) {
        const data = {
            name: form.elements.user.value,
            password: form.elements.password.value,
            human: form.elements.human.value
        };
        // window.location.href = "/admin" 

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/login');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            console.log("well done!");
        });

    } else {
        console.log('smth wrong!')
    }

    function validateForm(form) {
        let valid = true;

        if (!validateField(form.elements.user)) {
            valid = false;
        }
        if (!validateField(form.elements.password)) {
            valid = false;
        }
        if (!validateField(form.elements.human)) {
            valid = false;
        }

        return valid;
    }

    function validateField(field) {

        // field.nextElementSibling.textContent = '';
        // field.nextElementSibling.classList.remove('errorMessage');
        // field.classList.remove('form__input-field--error');
        // field.previousElementSibling.firstElementChild.classList.remove('form__input-icon--error');

        if (!field.checkValidity()) {
            field.nextElementSibling.textContent = field.validationMessage;
            field.nextElementSibling.classList.remove('error');
            field.nextElementSibling.classList.add('errorMessage');
            field.classList.add('form__input-field--error');
            field.previousElementSibling.firstElementChild.classList.add('form__input-icon--error');
            setTimeout(() => {
                field.nextElementSibling.textContent = '';
                field.nextElementSibling.classList.remove('errorMessage');
                field.previousElementSibling.firstElementChild.classList.remove('form__input-icon--error');
                field.classList.remove('form__input-field--error');
            }, 2000)
            return false;
        } else {
            field.nextElementSibling.textContent = '';
            return true;
        }
    }
})


authBtn.forEach(function (authBtn) {
    authBtn.addEventListener('click', function (e) {
        e.preventDefault();
        cards.forEach(function (card) {
            if (!card.classList.contains('js-toggle')) {
                card.classList.add('js-toggle');
            } else {
                card.classList.remove('js-toggle');
            }
        })
    });
});


const getUrl = (function(){
    const hash = window.location.href.slice(window.location.href.indexOf('?')+1);
    console.log(hash);

            if (hash == 'auth') {
        var card = document.querySelector('.user--front');
                card.classList.add('js-toggle');
        var cardBack = document.querySelector('.user--back');
                cardBack.classList.remove('js-toggle');
    }
})();

module.exports = getUrl;
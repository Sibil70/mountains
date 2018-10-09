const form = document.querySelector('#authform');
const loginBtn = document.querySelector('#loginBtn');


loginBtn.addEventListener('click', function (e) {
    e.preventDefault();


    if (validateForm(form)) {
        const data = {
            name: form.elements.user.value,
            password: form.elements.password.value,
            human: form.elements.human.value
        };
        
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener ('load', () => {
            console.log (xhr.response);
        });

        // const successOverlay = openOverlay("Сообщение отправлено");

        //         document.body.appendChild(successOverlay);

        //         function openOverlay(content) {
        //         const overlayElement = document.createElement("div");
        //         overlayElement.classList.add("orderoverlay");

        //         const containerElement = document.createElement("div");
        //         containerElement.classList.add("overlaycontainer");

        //         const contentElement = document.createElement("div");
        //         contentElement.classList.add("content");

        //         const textElement = document.createElement("div");
        //         textElement.classList.add("overlaytext");
        //         textElement.innerHTML = content;

        //         const closeElement = document.createElement("button");
        //         closeElement.classList.add("button");
        //         closeElement.classList.add("button--overlay");
        //         closeElement.textContent = "закрыть";
        //         closeElement.addEventListener("click", function(e) {
        //             e.preventDefault ();
        //             document.body.removeChild(overlayElement);
        //         });

        //         overlayElement.appendChild(containerElement);
        //         containerElement.appendChild(contentElement);
        //         contentElement.appendChild(textElement);
        //         contentElement.appendChild(closeElement);

        //          return overlayElement;
        //         }

    } else {
        console.log ('smth wrong!')
        // const failOverlay = openOverlay("Сообщение не отправлено!");

        // document.body.appendChild(failOverlay);

        // function openOverlay(content) {
        // const overlayElement = document.createElement("div");
        // overlayElement.classList.add("orderoverlay");

        // const containerElement = document.createElement("div");
        // containerElement.classList.add("overlaycontainer");

        // const contentElement = document.createElement("div");
        // contentElement.classList.add("content");

        // const textElement = document.createElement("div");
        // textElement.classList.add("overlaytext");
        // textElement.innerHTML = content;

        // const closeElement = document.createElement("button");
        // closeElement.classList.add("button");
        // closeElement.classList.add("button--overlay");
        // closeElement.textContent = "закрыть";
        // closeElement.addEventListener("click", function(e) {
        //     e.preventDefault ();
        //     document.body.removeChild(overlayElement);
        // });

        // overlayElement.appendChild(containerElement);
        // containerElement.appendChild(contentElement);
        // contentElement.appendChild(textElement);
        // contentElement.appendChild(closeElement);

        //  return overlayElement;
        // }

    }

    function validateForm(form) {
        let valid = true;

        if(!validateField(form.elements.user)) {
            valid = false;
        }
        if(!validateField(form.elements.password)) {
            valid = false;
        }
        if(!validateField(form.elements.human)) {
            valid = false;
        }

        return valid;
    }

    function validateField(field){

        field.nextElementSibling.textContent = '';
        field.nextElementSibling.classList.remove('errorMessage');
        field.classList.remove('form__input-field--error');
        field.previousElementSibling.firstElementChild.classList.remove('form__input-icon--error');

        if (!field.checkValidity()){
            field.nextElementSibling.textContent = field.validationMessage;
            field.nextElementSibling.classList.remove('error');
            field.nextElementSibling.classList.add('errorMessage');
            field.classList.add('form__input-field--error');
            field.previousElementSibling.firstElementChild.classList.add('form__input-icon--error');

            return false;
        } else {
            field.nextElementSibling.textContent = '';
            return true;
        }
    }
})
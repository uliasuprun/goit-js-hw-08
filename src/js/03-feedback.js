const throttle = require('lodash.throttle');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form")
const formData = {};

form.addEventListener("input", throttle(onInputAdded, 500));
form.addEventListener("submit", submitForm);

updateInput();

function onInputAdded(e) {
    e.preventDefault();
    const {email, message} = form.elements;
    formData [email.name] = email.value;
    formData [message.name] = message.value;
    console.log(formData);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function submitForm (e) {
    e.preventDefault();
    const {email, message} = form.elements;
    formData [email.name] = email.value;
    formData [message.name] = message.value;
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
};

function updateInput () {
    if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
        return;
    }
    const auditInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    form.elements.email.value = auditInput.email;
    form.elements.message.value = auditInput.message;
};
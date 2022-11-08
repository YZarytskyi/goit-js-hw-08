import throttle from 'lodash.throttle'

const FORM_DATA_KEY = "feedback-form-state"
const form = document.querySelector('.feedback-form')
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");

form.addEventListener('input', throttle(setStorageData, 500))
form.addEventListener('submit', clearStorageData)

const storageData = JSON.parse(localStorage.getItem(FORM_DATA_KEY))

if (storageData) {
  input.value = storageData[input.name];
  textarea.value = storageData[textarea.name];
}

function setStorageData() {
  const formData = {
    [input.name]: input.value,
    [textarea.name]: textarea.value,
  }  
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData))
}

function clearStorageData(e) {
  e.preventDefault();
  console.log({
    [input.name]: input.value,
    [textarea.name]: textarea.value,
  });
  e.currentTarget.reset();
  localStorage.removeItem(FORM_DATA_KEY)
}
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

function saveFormDataToLocalStorage (event) {
    if (event.target.closest('.feedback-form')){
        const formData = {
            email: emailInput.value.trim(), 
            message: messageTextarea.value.trim()
        };
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }
}
form.addEventListener('input', saveFormDataToLocalStorage);


function fillForm () {
    const formData = JSON.parse(localStorage.getItem(localStorageKey));
    if(formData) {
        emailInput.value = formData.email;
        messageTextarea.value = formData.message
    }
}


form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (emailInput.value.trim() === '' || messageTextarea.value.trim() === ''){
    alert('Будь ласка заповніть всі поля перед відправкою форми')
    return;
  }
	console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.removeItem(localStorageKey);
  form.reset();
});
fillForm();




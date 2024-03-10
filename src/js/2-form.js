const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

function saveFormDataToLocalStorage (event) {
    if (event.target.closest('.feedback-form')){
        const formData = {
            email: form.querySelector('input[name="email"]').value, // Отримання значення поля email
            message: form.querySelector('textarea[name="message"]').value
        };
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }
}
form.addEventListener('input', saveFormDataToLocalStorage);

function fillForm () {
    const formData = JSON.parse(localStorage.getItem(localStorageKey));
    if(formData) {
        form.querySelector('input[name="email"]').value = formData.email;
        form.querySelector('textarea[name="message"]').value = formData.message
    }
}


form.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.removeItem(localStorageKey);
  form.reset();
});
fillForm();




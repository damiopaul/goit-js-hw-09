import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),a="feedback-form-state",o=t.querySelector('input[name="email"]'),r=t.querySelector('textarea[name="message"]');function m(e){if(e.target.closest(".feedback-form")){const l={email:o.value.trim(),message:r.value.trim()};localStorage.setItem(a,JSON.stringify(l))}}t.addEventListener("input",m);function s(){const e=JSON.parse(localStorage.getItem(a));e&&(o.value=e.email,r.value=e.message)}t.addEventListener("submit",e=>{if(e.preventDefault(),o.value.trim()===""||r.value.trim()===""){alert("Будь ласка заповніть всі поля перед відправкою форми");return}console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),t.reset()});s();
//# sourceMappingURL=commonHelpers2.js.map
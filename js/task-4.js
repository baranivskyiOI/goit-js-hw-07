const regButton = document.querySelector(".login-form");

regButton.addEventListener("submit",formSubmitting);



function formSubmitting(event) {
    event.preventDefault();
    const form = event.target

    const email = form.elements.email.value.trim()
    const password = form.elements.password.value.trim()

    if (email === "" ||  password === "") {
        alert('All form fields must be filled in');
        return
    }
    
    const formData = {
        email: email,
        password: password,
    }   

    form.reset()

    console.log(formData);
    return formData
}
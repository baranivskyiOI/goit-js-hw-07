const input = document.querySelector(".js-input");
const titleName = document.querySelector("#name-output");


function greeting(userInput, greetingTitle) {
    userInput.addEventListener('input', () => {

        if (!userInput.value.trim()) {
            greetingTitle.textContent = "Anonymous";
        } else {
            greetingTitle.textContent = input.value.trim();
        };
        
    });
    
}

greeting(input,titleName);
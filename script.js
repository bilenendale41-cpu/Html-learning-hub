// Show HTML message

function showMessage() {

    document.getElementById("message").innerHTML =
        "HTML stands for HyperText Markup Language. It creates the structure of webpages.";

}


// Form submission

function submitForm(event) {

    event.preventDefault();

    document.getElementById("formMessage").innerHTML =
        "Your form was submitted successfully!";

}


// ARIA example

function showAriaMessage() {

    document.getElementById("ariaMessage").innerHTML =
        "ARIA helps make webpages more accessible to people who use assistive technologies.";

}
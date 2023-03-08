const form = document.getElementById("myForm");
const btnForm = document.getElementById("btnForm");
const sentMessage = document.getElementById("sentMessage");

btnForm.addEventListener("click", () => {
    form.style.display = form.style.display === "none" ? "block" : "none";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        sentMessage.style.display = "block";
        sentMessage.innerText = "Mensaje enviado";
        form.reset();
    }
    form.classList.add("was-validated");
});
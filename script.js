const overlay = document.getElementById("overlay");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const signupForm = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

let modalTimer;

function openModal() {
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");
    message.textContent = "";
    message.className = "";
    emailInput.focus();
}

function closeModal() {
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
    openModalBtn.focus();
}

function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}

// Show the modal automatically after 3 seconds.
modalTimer = setTimeout(openModal, 3000);

openModalBtn.addEventListener("click", () => {
    clearTimeout(modalTimer);
    openModal();
});

closeModalBtn.addEventListener("click", closeModal);

// Close when the user clicks outside the modal.
overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        closeModal();
    }
});

// Close using the Escape key.
document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        overlay.classList.contains("show")
    ) {
        closeModal();
    }
});

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!emailInput.checkValidity() || email === "") {
        showMessage("Please enter a valid email address.", "error");
        emailInput.focus();
        return;
    }

    showMessage(
        "Thank you! Your email has been accepted for this demo.",
        "success"
    );

    signupForm.reset();
});
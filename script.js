document.addEventListener("DOMContentLoaded", function() {
    const registerLink = document.querySelector("a[href='register.html']");
    if (registerLink) {
        registerLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "login.html";
        });
    }
});

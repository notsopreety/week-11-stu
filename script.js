
const darkModeToggle = document.querySelector("#darkModeToggle");

if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        console.log("Dark mode toggled!");
    });
} else {
    console.warn("Element with ID 'darkModeToggle' not found in HTML.");
}
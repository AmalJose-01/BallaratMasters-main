document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Fake form submission
    alert("Thank you for your message! (Form not connected to backend)");
    
    // Optionally clear the form
    this.reset();
});

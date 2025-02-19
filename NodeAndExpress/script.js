//Lomakkeen lähetys
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Estetään lomakkeen oletustoiminto
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    alert(`Kiitos, ${name}! Viestisi on lähetetty.`);
    this.reset();
});
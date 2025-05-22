// Matrix rain effect
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];
for(let i = 0; i < columns; i++)drops[i] = 1;
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
    for(let i = 0; i < drops.length; i++){
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(draw, 33);
// Redimensionnement de la fenêtre
window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
// Initialize Material Design components
document.addEventListener('DOMContentLoaded', ()=>{
    // Initialize text fields
    const textFields = document.querySelectorAll('.mdc-text-field');
    textFields.forEach((textField)=>{
        mdc.textField.MDCTextField.attachTo(textField);
    });
    // Initialize buttons
    const buttons = document.querySelectorAll('.mdc-button');
    buttons.forEach((button)=>{
        mdc.ripple.MDCRipple.attachTo(button);
    });
    // Initialize snackbar
    const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
    // Form submission handling
    const form = document.getElementById('subscribe-form');
    if (form) form.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const formData = new FormData(form);
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                form.style.display = 'none';
                snackbar.labelText = 'Merci ! Tu vas recevoir un email avec les instructions.';
                snackbar.open();
            } else {
                snackbar.labelText = "Oops, une erreur est survenue. Merci de r\xe9essayer.";
                snackbar.open();
            }
        } catch (err) {
            console.error('Error:', err);
            snackbar.labelText = "Oops, une erreur est survenue. Merci de r\xe9essayer.";
            snackbar.open();
        }
    });
});

//# sourceMappingURL=root_premier_contact.672d4772.js.map

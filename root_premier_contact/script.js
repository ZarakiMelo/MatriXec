// Matrix rain effect
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);

// Redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Initialize Material Design components
document.addEventListener('DOMContentLoaded', function() {
    // Matrix rain effect
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize Material Design components
    const textFields = document.querySelectorAll('.mdc-text-field');
    textFields.forEach(textField => {
        mdc.textField.MDCTextField.attachTo(textField);
    });

    // Initialize buttons
    const buttons = document.querySelectorAll('.mdc-button');
    buttons.forEach(button => {
        mdc.ripple.MDCRipple.attachTo(button);
    });

    // Initialize cards
    const cards = document.querySelectorAll('.mdc-card');
    cards.forEach(card => {
        const cardRipple = new mdc.ripple.MDCRipple(card);
        cardRipple.unbounded = true;
    });

    // Initialize chips
    const chipSets = document.querySelectorAll('.mdc-chip-set');
    chipSets.forEach(chipSet => {
        mdc.chips.MDCChipSet.attachTo(chipSet);
    });

    // Initialize progress bar
    const progressBars = document.querySelectorAll('.mdc-linear-progress');
    progressBars.forEach(progressBar => {
        const progress = mdc.linearProgress.MDCLinearProgress.attachTo(progressBar);
        progress.progress = 0.75; // Set to 75%
    });

    // Initialize switch
    const switches = document.querySelectorAll('.mdc-switch');
    switches.forEach(switchEl => {
        mdc.switchControl.MDCSwitch.attachTo(switchEl);
    });

    // Initialize slider
    const sliders = document.querySelectorAll('.mdc-slider');
    sliders.forEach(slider => {
        const sliderInstance = mdc.slider.MDCSlider.attachTo(slider);
        sliderInstance.listen('MDCSlider:change', () => {
            console.log(`Slider value: ${sliderInstance.value}`);
        });
    });

    // Initialize snackbars
    const successSnackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.success-snackbar'));
    const errorSnackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.error-snackbar'));

    // Form submission
    const form = document.getElementById('subscribe-form');
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;

        if (!name || !email) {
            errorSnackbar.labelText = 'Veuillez remplir tous les champs';
            errorSnackbar.open();
            return;
        }

        try {
            const response = await fetch(form.action, {
                method: form.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email })
            });

            if (response.ok) {
                successSnackbar.open();
                form.reset();
            } else {
                errorSnackbar.open();
            }
        } catch (error) {
            console.error('Error:', error);
            errorSnackbar.open();
        }
    });

    // Add click handler for card button
    const cardButton = document.querySelector('.demo-card .mdc-button');
    if (cardButton) {
        cardButton.addEventListener('click', () => {
            successSnackbar.labelText = 'Plus d\'informations à venir !';
            successSnackbar.open();
        });
    }
}); 
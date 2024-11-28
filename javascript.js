document.addEventListener('DOMContentLoaded', () => {
    const modalLinks = document.querySelectorAll('[data-modal]'); // Alle elementer med data-modal-attributt
    const modals = document.querySelectorAll('.modal'); // Alle popup-modaler
    const closeButtons = document.querySelectorAll('.modal .close'); // Lukk-knapper

    // Åpne popup når et element med data-modal klikkes
    modalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.getAttribute('data-modal'); // Hent ID for popup-vinduet
            const modal = document.getElementById(modalId); // Finn popup-vinduet
            if (modal) {
                modal.style.display = 'block';

                // Tilpass innhold dynamisk dersom data-title og data-content finnes
                const title = link.getAttribute('data-title');
                const content = link.getAttribute('data-content');
                if (title) modal.querySelector('h2').textContent = title;
                if (content) modal.querySelector('p').textContent = content;
            }
        });
    });

    // Lukk popup når en lukk-knapp klikkes
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal'); // Finn den nærmeste modalen
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Lukk popup når man klikker utenfor innholdet
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

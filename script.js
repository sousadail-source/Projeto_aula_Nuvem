function testarInteracao() {
    const alertBox = document.getElementById('demoAlert');
    if (alertBox) {
        alertBox.classList.remove('hidden');
    }
}

function fecharAlerta() {
    const alertBox = document.getElementById('demoAlert');
    if (alertBox) {
        alertBox.classList.add('hidden');
    }
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

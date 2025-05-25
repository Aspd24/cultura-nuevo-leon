// Efecto de escritura en el hero (opcional)
const heroTitle = document.querySelector('.hero h1');
const text = "Manifestaciones Culturales de Nuevo León";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();
let index = 0;
const images = document.querySelectorAll('.carousel-image');

setInterval(() => {
    images[index].style.display = 'none';
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
}, 3000); 
// Muda a imagem a cada 3 segundos

// Описан в документации
    import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
    import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryCardsMarkup(galleryItems);

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

function createGalleryCardsMarkup(array) {
    return array
    .map(item => {
        return `
        <a class="gallery__item" href="${item.original}">
            <img 
            class="gallery__image" 
            src="${item.preview}" 
            alt="${item.description}" />
        </a>`
    })
    .join('');
}
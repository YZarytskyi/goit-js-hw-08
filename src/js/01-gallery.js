import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Add imports above this line


const gallery = document.querySelector(".gallery");

const items = galleryItems.map(({ preview, original, description }) => (
  `<a class="gallery__item" href="${original}">
    <img 
      src=${preview}
      alt=${description} 
      class="gallery__image" />
  </a>`
)).join("");

gallery.insertAdjacentHTML('beforeend', items);

const lightbox = new SimpleLightbox(".gallery a", {
  captionType: "alt",
  captionsData: "alt",
  captionDelay: 250,
});


import { galleryItems } from "./gallery-items.js";
// Change code below this line
let instance = "";
const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", openModalBigSizeImage);

function renderingGalleryHtml(array) {
  return array
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

galleryEl.innerHTML = renderingGalleryHtml(galleryItems);

function openModalBigSizeImage(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600">
`);

  instance.show();

  window.addEventListener("keydown", closeModalBigSizeImage);
}

function closeModalBigSizeImage(event) {
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", closeModalBigSizeImage);
  }
}

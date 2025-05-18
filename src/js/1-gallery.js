
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRefs = document.querySelector('.gallery');

(function createMarkup() {
  const itemMarkup = galleryItems.map(templateFunction).join('');
  galleryRefs.insertAdjacentHTML('beforeend', itemMarkup);
})();

new SimpleLightbox('.gallery a', {
  captions: true,
  captionData: 'alt', 
  captionDelay: 250,
});

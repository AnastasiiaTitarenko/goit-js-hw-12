`use strict`;

// Library iziToast
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Library SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Import 
import { getPhotos } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

// querySelectors
const btnSubmit = document.getElementById("search-btn");
const searchForm = document.getElementById("search-form");
const searchInput = document.querySelector("[picture]");
const searchGallery = document.getElementById("gallery");
const btnLoadMore = document.querySelector(".load-more-btn");

const gallery = new SimpleLightbox(`.galleryCard a`, {
                    captionType: `attr`,
                    captionsData: `alt`,
                    captionDelay: 250,
});

let currentPage = 1;
let currentQuery = '';

searchForm.addEventListener("submit", handleSubmit);

btnLoadMore.addEventListener('click', event => {
  event.preventDefault();
  handleLoadMore();
});
function clearMarkup() {
  gallery.innerHTML = '';
}

async function handleSubmit(event) {
    event.preventDefault();
  
    const { picture } = event.currentTarget.elements;
    currentQuery = picture.value;

    loader.style.display = "block";

    clearMarkup();
    
try {
    const response = await getPhotos(currentQuery, currentPage);
        
    if (response.hits.length === 0) {
        return iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
    } else {
        searchGallery.innerHTML = createMarkup(response.hits);
        toggleLoadButton(response.totalHits);
            gallery.refresh();
    }
} catch (error) {

    iziToast.error({
            title: "Error",
            message: "Error. Please try again!"
            });
    clearMarkup();
    
} finally {
            loader.style.display = "none";
            searchForm.reset();
}

}
async function handleLoadMore() {
  currentPage += 1;
  try {
    const data = await getPhotos(currentQuery, currentPage);
    if (data.hits.length > 0) {
      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      togglebtnLoadMore(data.totalHits);

      const galleryCardHeight = document.querySelector('.galleryCard')
        .getBoundingClientRect().height;
      window.scrollBy({
        top: galleryCardHeight * 3,
        behavior: 'smooth',
      });

      gallery.refresh();
    } else {
      iziToast.info({
        title: 'Info',
        message: 'No more images to load!',
      });
    }
   
    if (currentPage * 15 >= data.totalHits) {
      btnLoadMore.style.display = 'none';
      iziToast.info({
        title: 'End of search results',
        message:
          "We're sorry, but you're nearing the end of the search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'An error occurred while fetching more images. Please try again later!',
    });
  }
}

function toggleLoadButton(totalHits) {
  if (currentPage * 15 < totalHits) {
    btnLoadMore.style.display = 'block';
  } else {
    btnLoadMore.style.display = 'none';
  }
}
                





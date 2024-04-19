`use strict`;

// Library iziToast
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Library SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Import функцій
import { getPhotos } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

// querySelectors
const btnSubmit = document.getElementById("search-btn");
const searchForm = document.getElementById("search-form");
const searchInput = document.querySelector("[picture]");
const searchGallery = document.getElementById("gallery");
const loader = document.querySelector(".loader");
const btnLoadMore = document.querySelector(".load-more-btn");

let page = 1;
let currentQuery = null;

searchForm.addEventListener("submit", handleSubmit);

//------ очищення вмісту галереї-----
function clearMarkup() {
  searchGallery.innerHTML = '';
}
// ----------------------------------

btnLoadMore.addEventListener('click', event => {
  event.preventDefault();
  handleLoadMore();
});

// -------Обробка форми та відправлення запиту-------
async function handleSubmit(event) {
    event.preventDefault();
    searchGallery.innerHTML = '';
     gallery.refresh(); 
  
    currentQuery = event.currentTarget.elements['picture'].value.trim();

    loader.style.display = "block";
    
try {
    const response = await getPhotos(currentQuery, page);
    console.log(response);
    
    if (response.hits.length === 0) {
        return iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
    } else {
        searchGallery.innerHTML = createMarkup(response.hits);
        toggleLoadButton(response.hits.length);
        return response;
    }

} catch (error) {
    console.error(error);
} finally {
            loader.style.display = "none";
            searchForm.reset();
}
}
// -------Gallery-------
const gallery = new SimpleLightbox(`.galleryCard a`, {
                    captionType: `attr`,
                    captionsData: `alt`,
                    captionDelay: 250,
});

// -------Load More-------
async function handleLoadMore() {
  page += 1;
  try {
      const response = await getPhotos(currentQuery, page);
      
    if (response.hits.length > 0) {
      searchGallery.insertAdjacentHTML('beforeend', createMarkup(response.hits));
        toggleLoadButton(response.hits.length);
        
        // Функія для скролу
        const {height: galleryCardHeight} = document.querySelector('.galleryCard')
        .firstElementChild.getBoundingClientRect();
        window.scrollBy({
        top: galleryCardHeight * 3,
        behavior: 'smooth',
        });

        // -------Last Page-------
        const lastPage = Math.ceil(response.totalHits / 20);
        if (lastPage === page) {
            btnLoadMore.classList.add('is-hidden');
            return iziToast.info({
            message: "We're sorry, but you've reached the end of search results"
            });
        }

    } else {
      iziToast.info({
        title: 'Info',
        message: 'No more images to load!',
      });
    }
      
//    -------Check--------
    if (page * 20 >= response.hits) {
      btnLoadMore.style.display = 'none';
      iziToast.info({
        title: 'End of search results',
        message:
          "We're sorry, but you're nearing the end of the search results.",
      });
    }
  } catch (error) {
      console.error(error);
  }
}
// -------Load More BTN-------
function toggleLoadButton() {
  if (page * 20 < response.hits) {
    btnLoadMore.style.display = 'block';
  } else {
    btnLoadMore.style.display = 'none';
  }
}
                




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
const loader = document.querySelector(".loader");
const btnLoadMore = document.querySelector(".load-more-btn");

let page = 1;
let currentQuery = null;

searchForm.addEventListener("submit", handleSubmit);

function clearMarkup() {
  searchGallery.innerHTML = '';
}

btnLoadMore.addEventListener('click', event => {
  event.preventDefault();
  handleLoadMore();
});

async function handleSubmit(event) {
    event.preventDefault();
    searchGallery.innerHTML = '';
  
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
        toggleLoadButton(response.hits);
        return response;
        gallery.refresh();
    }
} catch (error) {
    console.error(error);

    
} finally {
            loader.style.display = "none";
            searchForm.reset();
}

}
const gallery = new SimpleLightbox(`.galleryCard a`, {
                    captionType: `attr`,
                    captionsData: `alt`,
                    captionDelay: 250,
});

async function handleLoadMore() {
  page += 1;
  try {
      const response = await getPhotos(currentQuery, page);
      
    if (response.hits.length > 0) {
      searchGallery.insertAdjacentHTML('beforeend', createMarkup(response.hits));
        toggleLoadButton(response.total);
        
        // Функія для скролу
        
        const {height: galleryCardHeight} = document.querySelector('.galleryCard')
        .firstElementChild.getBoundingClientRect();
      
        window.scrollBy({
        top: galleryCardHeight * 3,
        behavior: 'smooth',
        });
        const lastPage = Math.ceil(response.total / 20);
        if (lastPage === page) {
            btnLoadMore.classList.add('is-hidden');
            return iziToast.info({
               message: "We're sorry, but you've reached the end of search results"
           })
        }

    } else {
      iziToast.info({
        title: 'Info',
        message: 'No more images to load!',
      });
    }
   
    if (page * 15 >= response.hits) {
      btnLoadMore.style.display = 'none';
      iziToast.info({
        title: 'End of search results',
        message:
          "We're sorry, but you're nearing the end of the search results.",
      });
    }
  } catch (error) {
      console.error(error);
    // iziToast.error({
    //   title: 'Error',
    //   message:
    //     'An error occurred while fetching more images. Please try again later!',
    // });
  }
}

function toggleLoadButton(total) {
  if (page * 15 < total) {
    btnLoadMore.style.display = 'block';
  } else {
    btnLoadMore.style.display = 'none';
  }
}
                




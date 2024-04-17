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

searchForm.addEventListener("submit", handleSubmit);

function clearMarkup() {
  searchGallery.innerHTML = '';
}
function handleSubmit(event) {
    event.preventDefault();
    const { picture } = event.currentTarget;

    loader.style.display = "block";
    clearMarkup();
    

    getPhotos(picture.value)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
            } else {
                searchGallery.innerHTML = createMarkup(data.hits);
                gallery.refresh();
            }
            
        })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: "Error. Please try again!"
            });
             clearMarkup();
        })
        .finally(() => {
            loader.style.display = "none";
            searchForm.reset();
        });
}
const gallery = new SimpleLightbox(`.galleryCard a`, {
                    captionType: `attr`,
                    captionsData: `alt`,
                    captionDelay: 250,
                });
                





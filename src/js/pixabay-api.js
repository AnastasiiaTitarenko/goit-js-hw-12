'use strict';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = "43303597-4cf3538acd20e5586f11f779c";

export function getPhotos(picture) {
    
    
    const params = new URLSearchParams({
        key: API_KEY,
        q: picture,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

   return fetch(`${BASE_URL}?${params}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
};

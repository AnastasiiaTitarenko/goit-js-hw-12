import axios from "axios";

export async function getPhotos(picture, page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '43303597-4cf3538acd20e5586f11f779c';
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                key: API_KEY,
                q: picture,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: 15,
                page: page,
            }
        })
    
        return response.data;
    }
  
    catch (error) {
        console.error(error);

    }
}



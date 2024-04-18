
export function createMarkup(arr) {
    return arr
        .map(item => {
            return `
         <li class="galleryCard">
          <a href="${largeImageURL}" class="lightbox-image">
            <img src="${webformatURL}" alt="${tags}" class="picture-icon">
          </a>

          <div class="picture-info">
            
          <div>
              <span>Likes:</span>
              <span class="likes">${likes}</span>
            </div>
            
            <div>
              <span>Views:</span>
              <span class="views">${views}</span>
            </div>
            
            <div>
              <span>Comments:</span>
              <span class="comments">${comments}</span>
            </div>
           
            <div>
              <span>Downloads:</span>
              <span class="downloads">${downloads}</span>
            </div>
          </div>

        </li>`
        }).join('');

}
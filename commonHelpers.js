import{a as g,i as a,S as y}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();async function p(t,r){const n="https://pixabay.com/api/",o="43303597-4cf3538acd20e5586f11f779c",e=await g.get(`${n}`,{params:{key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}});return console.log(e.data),e.data}function m(t){return t.map(r=>`
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

        </li>`).join("")}document.getElementById("search-btn");const f=document.getElementById("search-form");document.querySelector("[picture]");const l=document.getElementById("gallery"),d=document.querySelector(".load-more-btn");let i=1,u=null;f.addEventListener("submit",v);function h(){l.innerHTML=""}d.addEventListener("click",t=>{t.preventDefault(),L()});async function v(t){t.preventDefault(),l.innerHTML="",u=t.currentTarget.elements.picture.value.trim(),loader.style.display="block";try{const r=await p(u,i);if(r.results.length===0)return a.error({message:"Sorry, there are no images matching your search query. Please try again!"});l.innerHTML=m(r.results)}catch{a.error({message:"Error. Please try again!"}),h()}finally{loader.style.display="none",f.reset()}}new y(".galleryCard a",{captionType:"attr",captionsData:"alt",captionDelay:250});async function L(){i+=1;try{const t=await p(u,i);if(t.results.length>0){l.insertAdjacentHTML("beforeend",m(t.results));const{height:r}=document.querySelector(".galleryCard").firstElementChild.getBoundingClientRect();if(window.scrollBy({top:r*3,behavior:"smooth"}),Math.ceil(t.total/20)===i)return d.searchGallery.add("is-hidden"),a.info({message:"We're sorry, but you've reached the end of search results"})}else a.info({title:"Info",message:"No more images to load!"});currentPage*15>=t.results&&(d.style.display="none",a.info({title:"End of search results",message:"We're sorry, but you're nearing the end of the search results."}))}catch{a.error({title:"Error",message:"An error occurred while fetching more images. Please try again later!"})}}
//# sourceMappingURL=commonHelpers.js.map

import{a as g,i as s,S as y}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();async function p(t,r){const o="https://pixabay.com/api/",i="43303597-4cf3538acd20e5586f11f779c";return(await g.get(`${o}`,{params:{key:i,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}function m(t){return t.map(r=>`
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

        </li>`).join("")}document.getElementById("search-btn");const f=document.getElementById("search-form");document.querySelector("[picture]");const l=document.getElementById("gallery"),d=document.querySelector(".load-more-btn");let n=1,u=null;f.addEventListener("submit",v);function h(){l.innerHTML=""}d.addEventListener("click",t=>{t.preventDefault(),b()});async function v(t){t.preventDefault(),l.innerHTML="",u=t.currentTarget.elements.picture.value.trim(),loader.style.display="block";try{const r=await p(u,n);if(r.data.length===0)return s.error({message:"Sorry, there are no images matching your search query. Please try again!"});return l.innerHTML=m(r.data),r.data;L.refresh()}catch{s.error({message:"Error. Please try again!"}),h()}finally{loader.style.display="none",f.reset()}}const L=new y(".galleryCard a",{captionType:"attr",captionsData:"alt",captionDelay:250});async function b(){n+=1;try{const t=await p(u,n);if(t.data.length>0){l.insertAdjacentHTML("beforeend",m(t.data));const{height:r}=document.querySelector(".galleryCard").firstElementChild.getBoundingClientRect();if(window.scrollBy({top:r*3,behavior:"smooth"}),Math.ceil(t.total/20)===n)return d.searchGallery.add("is-hidden"),s.info({message:"We're sorry, but you've reached the end of search results"})}else s.info({title:"Info",message:"No more images to load!"});n*15>=t.data&&(d.style.display="none",s.info({title:"End of search results",message:"We're sorry, but you're nearing the end of the search results."}))}catch{s.error({title:"Error",message:"An error occurred while fetching more images. Please try again later!"})}}
//# sourceMappingURL=commonHelpers.js.map

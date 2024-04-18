import{a as y,S as h,i as o}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const v="https://pixabay.com/api/",L="43303597-4cf3538acd20e5586f11f779c";async function m(e){try{return(await y.get(v,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page}})).hits}catch(r){throw new Error(r.response.status)}}function f(e){return e.map(r=>`
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

        </li>`).join("")}document.getElementById("search-btn");const g=document.getElementById("search-form");document.querySelector("[picture]");const b=document.getElementById("gallery"),i=document.querySelector(".load-more-btn"),l=new h(".galleryCard a",{captionType:"attr",captionsData:"alt",captionDelay:250});let n=1,d="";g.addEventListener("submit",w);i.addEventListener("click",e=>{e.preventDefault(),E()});function p(){l.innerHTML=""}async function w(e){e.preventDefault();const{picture:r}=e.currentTarget.elements;d=r.value,loader.style.display="block",p();try{const a=await m(d,n);if(a.hits.length===0)return o.error({message:"Sorry, there are no images matching your search query. Please try again!"});b.innerHTML=f(a.hits),P(a.totalHits),l.refresh()}catch{o.error({title:"Error",message:"Error. Please try again!"}),p()}finally{loader.style.display="none",g.reset()}}async function E(){n+=1;try{const e=await m(d,n);if(e.hits.length>0){l.insertAdjacentHTML("beforeend",f(e.hits)),togglebtnLoadMore(e.totalHits);const r=document.querySelector(".galleryCard").getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"}),l.refresh()}else o.info({title:"Info",message:"No more images to load!"});n*15>=e.totalHits&&(i.style.display="none",o.info({title:"End of search results",message:"We're sorry, but you're nearing the end of the search results."}))}catch{o.error({title:"Error",message:"An error occurred while fetching more images. Please try again later!"})}}function P(e){n*15<e?i.style.display="block":i.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map

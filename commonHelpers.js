import{a as b,S as L,i as c}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();async function y(t,r){const n="https://pixabay.com/api/",a="43303597-4cf3538acd20e5586f11f779c";try{return(await b.get(`${n}`,{params:{key:a,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(e){console.error(e)}}function f(t){return t.map(({largeImageURL:r,webformatURL:n,tags:a,likes:e,views:s,comments:l,downloads:v})=>`
         <li class="galleryCard">
          <a href="${r}" class="lightbox-image">
            <img src="${n}" alt="${a}" class="picture-icon">
          </a>

          <div class="picture-info">
            
          <div>
              <span>Likes:</span>
              <span class="likes">${e}</span>
            </div>
            
            <div>
              <span>Views:</span>
              <span class="views">${s}</span>
            </div>
            
            <div>
              <span>Comments:</span>
              <span class="comments">${l}</span>
            </div>
           
            <div>
              <span>Downloads:</span>
              <span class="downloads">${v}</span>
            </div>
          </div>

        </li>`).join("")}document.getElementById("search-btn");const m=document.getElementById("search-form");document.querySelector("[picture]");const d=document.querySelector(".gallery"),p=document.querySelector(".loader"),o=document.querySelector(".load-more-btn"),h=new L(".gallery a",{captionType:"attr",captionsData:"alt",captionDelay:250});let i=1,u="";o.style.display="none";m.addEventListener("submit",w);o.addEventListener("click",t=>{t.preventDefault(),S()});async function w(t){t.preventDefault(),d.innerHTML="",i=1,u=t.currentTarget.elements.picture.value.trim(),p.style.display="block";try{const r=await y(u,i);if(r.hits.length===0)return o.style.display="none",c.error({message:"Sorry, there are no images matching your search query. Please try again!"});d.innerHTML=f(r.hits),g(r),h.refresh()}catch(r){console.error(r)}finally{p.style.display="none",m.reset()}}async function S(){i+=1;try{const t=await y(u,i);if(t.hits.length>0){d.insertAdjacentHTML("beforeend",f(t.hits)),g(t),h.refresh();const{height:r}=document.querySelector(".galleryCard").firstElementChild.getBoundingClientRect();if(window.scrollBy({top:r*3,behavior:"smooth"}),Math.ceil(t.totalHits/15)===0)return o.style.display="none",c.info({message:"We're sorry, but you've reached the end of search results"})}else c.info({title:"Info",message:"No more images to load!"});i*15>=t.totalHits&&(o.style.display="none",c.info({title:"End of search results",message:"We're sorry, but you're nearing the end of the search results."}))}catch(t){console.error(t)}}function g(t){i*15<t.totalHits?o.style.display="block":o.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map

import{a as v,i as c,S as b}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function y(t,r){const o="https://pixabay.com/api/",n="43303597-4cf3538acd20e5586f11f779c";try{return(await v.get(`${o}`,{params:{key:n,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(e){console.error(e)}}function f(t){return t.map(({largeImageURL:r,webformatURL:o,tags:n,likes:e,views:s,comments:i,downloads:g})=>`
         <li class="galleryCard">
          <a href="${r}" class="lightbox-image">
            <img src="${o}" alt="${n}" class="picture-icon">
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
              <span class="comments">${i}</span>
            </div>
           
            <div>
              <span>Downloads:</span>
              <span class="downloads">${g}</span>
            </div>
          </div>

        </li>`).join("")}document.getElementById("search-btn");const h=document.getElementById("search-form");document.querySelector("[picture]");const d=document.getElementById("gallery"),p=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let a=1,u=null;h.addEventListener("submit",L);l.addEventListener("click",t=>{t.preventDefault(),E()});async function L(t){t.preventDefault(),d.innerHTML="",w.refresh(),u=t.currentTarget.elements.picture.value.trim(),p.style.display="block";try{const r=await y(u,a);return console.log(r),r.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(d.innerHTML=f(r.hits),m(r.hits.length),r)}catch(r){console.error(r)}finally{p.style.display="none",h.reset()}}const w=new b(".galleryCard a",{captionType:"attr",captionsData:"alt",captionDelay:250});async function E(){a+=1;try{const t=await y(u,a);if(t.hits.length>0){d.insertAdjacentHTML("beforeend",f(t.hits)),m(t.hits.length);const{height:r}=document.querySelector(".galleryCard").firstElementChild.getBoundingClientRect();if(window.scrollBy({top:r*3,behavior:"smooth"}),Math.ceil(t.totalHits/20)===a)return l.classList.add("is-hidden"),c.info({message:"We're sorry, but you've reached the end of search results"})}else c.info({title:"Info",message:"No more images to load!"});a*20>=t.hits&&(l.style.display="none",c.info({title:"End of search results",message:"We're sorry, but you're nearing the end of the search results."}))}catch(t){console.error(t)}}function m(){a*20<response.hits?l.style.display="block":l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map

import{a as b,i as d,S as L}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function f(t,s){const i="https://pixabay.com/api/",n="43303597-4cf3538acd20e5586f11f779c";try{return(await b.get(`${i}`,{params:{key:n,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}catch(e){console.error(e)}}function m(t){return t.map(({largeImageURL:s,webformatURL:i,tags:n,likes:e,views:r,comments:l,downloads:v})=>`
         <li class="galleryCard">
          <a href="${s}" class="lightbox-image">
            <img src="${i}" alt="${n}" class="picture-icon">
          </a>

          <div class="picture-info">
            
          <div>
              <span>Likes:</span>
              <span class="likes">${e}</span>
            </div>
            
            <div>
              <span>Views:</span>
              <span class="views">${r}</span>
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

        </li>`).join("")}document.getElementById("search-btn");const h=document.getElementById("search-form");document.querySelector("[picture]");const u=document.getElementById("gallery"),y=document.querySelector(".loader"),c=document.querySelector(".load-more-btn");let a=1,p=null,o=null;h.addEventListener("submit",w);c.addEventListener("click",t=>{t.preventDefault(),S()});async function w(t){t.preventDefault(),u.innerHTML="",E.refresh(),p=t.currentTarget.elements.picture.value.trim(),y.style.display="block";try{if(o=await f(p,a),o.hits.length===0)return d.error({message:"Sorry, there are no images matching your search query. Please try again!"});u.innerHTML=m(o.hits),g(o)}catch(s){console.error(s)}finally{y.style.display="none",h.reset()}}const E=new L(".galleryCard a",{captionType:"attr",captionsData:"alt",captionDelay:250});async function S(){a+=1;try{if(o=await f(p,a),o.hits.length>0){u.insertAdjacentHTML("beforeend",m(o.hits)),g(o);const{height:t}=document.querySelector(".galleryCard").firstElementChild.getBoundingClientRect();if(window.scrollBy({top:t*3,behavior:"smooth"}),Math.ceil(o.totalHits/20)===a)return c.classList.add("is-hidden"),d.info({message:"We're sorry, but you've reached the end of search results"})}else d.info({title:"Info",message:"No more images to load!"});a*20>=o.totalHits&&(c.style.display="none",d.info({title:"End of search results",message:"We're sorry, but you're nearing the end of the search results."}))}catch(t){console.error(t)}}function g(t){a*20<t.totalHits?c.style.display="block":c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map

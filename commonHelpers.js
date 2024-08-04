/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const n=document.querySelector(".gallery");function c(o){return o.map(t=>`<li class="gallery-item">
	                <a class="gallery-link" href=${image.original}>
		                <img 
			                class="gallery-image" 
			                src=${image.preview} 
			                alt=${image.description} 
			                />
	                </a>
                </li>`)}n.insertAdjacentHTML("beforeend",c);
//# sourceMappingURL=commonHelpers.js.map

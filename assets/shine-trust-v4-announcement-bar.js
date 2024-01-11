"use strict";!function(e){const t=setInterval((()=>{window.ST_GLOBALS&&(clearInterval(t),s().then((()=>console.info("ST Announcement Bar loaded"))))}));class n{constructor(t){this.announcementBar=t;let{id:n,html:i}=this.announcementBar;this.announcementBarEl=e.createElement("div"),this.announcementBarEl.classList.add(`st-announcement-bar-wrapper-${n}`),this.announcementBarEl.classList.add("st-topbar-fadeIn"),this.announcementBarEl.innerHTML=i}render(){const{editor:e,target:{deviceShow:t}}=this.announcementBar,{mapping:n={},transitionEffect:i="none",transitionTime:o=4e3,behavior:s=!1,behaviorShowMs:l,behaviorHideMs:a,position:c,selector:r}=e;for(const e in n){let t=n[e];this.announcementBarEl.querySelector(e).innerHTML=window.ST_GLOBALS.translate(t)}return"desktop"===t?(this.announcementBarEl.firstChild.classList.add("hide-on-mobile"),this.announcementBarEl.firstChild.classList.remove("hide-on-desktop")):"mobile"===t?(this.announcementBarEl.firstChild.classList.add("hide-on-desktop"),this.announcementBarEl.firstChild.classList.remove("hide-on-mobile")):this.announcementBarEl.firstChild.classList.remove("hide-on-mobile","hide-on-desktop"),{announcementBarEl:this.announcementBarEl,announcementBaData:this.announcementBar,sliderType:i,sliderTime:o,show:s?1e3*parseInt(l):0,hide:s?1e3*parseInt(a):0,position:c,selector:r||{cssSelector:"",cssPosition:""}}}}let i=null;const o=[],s=async function(){if(!window.ST_PLAN||"Advanced"!==window.ST_PLAN?.name||"ACTIVE"!==window.ST_PLAN?.status)return;i=window.ST_GLOBALS.getBaseCDN();const t=window.ST_ANNOUNCEMENT_BARS||[];if(0===t.length)return;const s=[];let c="";await Promise.all(t.map((async(e,t)=>{const{id:i,status:l,css:r,editor:d,target:{locationFilter:h,locationShow:p,pageFilter:u,pageShow:w,collections:m=[]}}=e,{fontFamily:T,startDateStatus:S,endDateStatus:f,startDateTime:y,endDateTime:L}=d;if(l){let t=!1;if(S||f){const e=window.ST_GLOBALS.dateWithTimeZone(new Date,window.ST_META_DATA.timeZone),n=window.ST_GLOBALS.dateWithTimeZone(y,window.ST_META_DATA.timeZone),i=window.ST_GLOBALS.dateWithTimeZone(L,window.ST_META_DATA.timeZone);(!S&&f&&i.getTime()>=e.getTime()||S&&!f&&n.getTime()<=e.getTime()||S&&f&&n.getTime()<=e.getTime()&&i.getTime()>=e.getTime())&&(t=!0)}else t=!0;if(t){if(a(window.ST_GLOBALS.pageType,u,w,m)){let t=!0;if("include"===h){if(!p.includes("all")){const e=await window.ST_GLOBALS.getCountryCode();p.includes(e)||(t=!1)}}else if("exclude"===h){const e=await window.ST_GLOBALS.getCountryCode();p.includes(e)&&(t=!1)}if(t&&(o[i]=new n(e).render(),c+=r,"object"==typeof T&&T?.fontFamily)){0===s.filter((e=>e.fontFamily===T.fontFamily&&parseInt(e.fontWeight)===parseInt(T.fontWeight))).length&&s.push(T)}}}}}))),s.length&&s.map((e=>{window.ST_LOADED_FONTS.includes(e.fontFamily)||window.ST_GLOBALS.loadFont(e)})),c&&window.ST_GLOBALS.addStyle(c);let r=0;for(const t in o){const n=o[t],{announcementBarEl:i,position:s,selector:a,sliderType:c,sliderTime:d,show:h,hide:p}=n;i.firstChild.style.zIndex=25-r,setTimeout((async()=>{if("custom"===s){if(a?.cssSelector){const n=a?.cssPosition?a.cssPosition:"below",o=a?.cssSelector.split(",");for(const s in o){let o=e.querySelector(s);if(!o){let t=0;for(;t<=5;)o=e.querySelector(s),o?t=6:(await new Promise((e=>setTimeout(e,300))),t++)}if(o){let e=i.cloneNode(!0);e.classList.add("st-topbar-custom"),"above"===n?o.parentNode.insertBefore(e,o):o.parentNode.insertBefore(e,o.nextSibling),l.init(t,e,c,d,window.ST_META_DATA?.effectElementTopBar),p>0&&setTimeout((()=>{e.remove(),window.ST_GLOBALS.changeBodyStyle(".st-topbar",".st-element-none",window.ST_META_DATA?.effectElementTopBar)}),p)}}}}else e.body.insertAdjacentElement("afterbegin",i),l.init(t,i,c,d,window.ST_META_DATA?.effectElementTopBar),p>0&&setTimeout((()=>{i.remove(),window.ST_GLOBALS.changeBodyStyle(".st-topbar",".st-element-none",window.ST_META_DATA?.effectElementTopBar)}),p);window.ST_GLOBALS.changeBodyStyle(".st-topbar",window.ST_GLOBALS.cssFixed,window.ST_META_DATA?.effectElementTopBar)}),h),r++}},l={timer:{},init:function(e,t,n,i,o=""){let s=t.querySelectorAll(".st-topbar-item");if(s.length>1){const o=this;let l=0,a=0;const c=t.querySelector(".st-topbar-items");if(c.classList.remove("none"),c.classList.add(n),c.classList.add("has-carousel"),2===s.length){let e=c.querySelector(".st-item-inner"),n=e.firstChild.cloneNode(!0),i=e.lastChild.cloneNode(!0);n.classList.remove("active"),n.setAttribute("data-index",3),i.classList.remove("active"),i.setAttribute("data-index",4),e.appendChild(n),e.appendChild(i),s=t.querySelectorAll(".st-topbar-item")}window.matchMedia("(min-width: 768px)").matches?(s.forEach((e=>{l=e.clientWidth>l?e.clientWidth:l,a=e.clientHeight>a?e.clientHeight:a})),c.style.width=`${l}px`,c.style.height=`${a}px`):(l=c.clientWidth,c.style.width="100%",c.style.height="auto"),"none"===n&&this.setTypeNone(s),"fade"===n&&this.setTypeFade(s),"slide"===n&&this.setTypeSlide(s,t,l,!0),"push"===n&&this.setTypePush(s,t,a),this.timer[e]=setInterval((()=>{o.setArrow(e,t,c,s,n,l,a,i,!0)}),parseInt(i));let r=t.querySelector(".st-arrow-left");t.querySelector(".st-arrow-right").addEventListener("click",(function(){o.setArrow(e,t,c,s,n,l,a,i,!0)})),r.addEventListener("click",(function(){o.setArrow(e,t,c,s,n,l,a,i,!1)}))}let l=t.querySelector(".st-topbar-close");l&&l.addEventListener("click",(function(e){window.ST_GLOBALS.closeBar(e,".st-topbar",o)}));let a=t.querySelectorAll(".st-topbar-style4 .st-topbar-text span");if(a.length)for(let e=0;e<a.length;e++)a[e].addEventListener("click",window.ST_GLOBALS.copy)},setTypeNone:function(e){e.forEach((e=>{const t=e.classList.contains("active");e.style.position=t?"relative":"absolute",e.style.display=t?"block":"none"}))},setTypeFade:function(e){e.forEach((e=>{const t=e.classList.contains("active");e.style.position=t?"relative":"absolute",setTimeout((()=>{e.style.opacity=t?1:0}),t?500:0)}))},setTypeSlide:function(e,t,n,i=!0){const o=t.querySelector(".st-topbar-item.active").getAttribute("data-index");e.forEach((e=>{e.style.transition="all 1s";let t=e.classList.contains("active");e.style.position=t?"relative":"absolute",t&&(e.style.left="0px")}));const s=t.querySelector(`.st-topbar-item[data-index="${o>1?parseInt(o)-1:e.length}"]`),l=t.querySelector(`.st-topbar-item[data-index="${o<e.length?parseInt(o)+1:1}"]`);s.style.opacity=1,l.style.opacity=1,i&&(l.style.transition="none"),!i&&(s.style.transition="none"),s.style.left=`-${n}px`,l.style.left=`${n}px`},setTypePush:function(e,t,n){const i=t.querySelector(".st-topbar-item.active").getAttribute("data-index");e.forEach((e=>{let t=e.classList.contains("active");e.style.position=t?"relative":"absolute",t&&(e.style.top="0px")}));const o=t.querySelector(`.st-topbar-item[data-index="${i>1?parseInt(i)-1:e.length}"]`),s=t.querySelector(`.st-topbar-item[data-index="${i<e.length?parseInt(i)+1:1}"]`);o.style.top=`-${n}px`,s.style.top=`${n}px`},setArrow:function(e,t,n,i,o,s,l,a,c=!0){const r=this;clearInterval(this.timer[e]);const d=i.length,h=n.querySelector(".st-topbar-item.active"),p=h.getAttribute("data-index"),u=c?p<d?parseInt(p)+1:1:p>1?parseInt(p)-1:d,w=n.querySelector('.st-topbar-item[data-index="'+u+'"]');h.classList.remove("active"),w.classList.add("active"),"none"===o&&this.setTypeNone(i),"fade"===o&&this.setTypeFade(i),"slide"===o&&this.setTypeSlide(i,t,s,c),"push"===o&&this.setTypePush(i,t,l),this.timer[e]=setInterval((()=>{r.setArrow(e,t,n,i,o,s,l,a,!0)}),parseInt(a))}},a=function(e,t="include",n,i=[]){let o=!1,s="";switch(n){case"collection_page":s="collection";break;case"collection_list":s="list-collections";break;case"product_page":s="product";break;case"homepage":s="index";break;case"cart":s="cart"}if("include"===t)if("collection"===e&&"collection"===s){const e=`gid://shopify/Collection/${window.ST_GLOBALS.collectionID}`;(i.includes("selectall")||window.ST_GLOBALS.collectionID&&i.includes(e)||!window.ST_GLOBALS.collectionID&&i.includes("all"))&&(o=!0)}else"all"!==n&&e!==s||(o=!0);else if("exclude"===t)if("collection"===e&&"collection"===s){const e=`gid://shopify/Collection/${window.ST_GLOBALS.collectionID}`;i.includes("selectall")?window.ST_GLOBALS.collectionID&&!i.includes(e)?o=!0:window.ST_GLOBALS.collectionID||i.includes("all")||(o=!0):o=!0}else e!==s&&(o=!0);return o}}(window.document);
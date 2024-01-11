"use strict";var STCountdown=function(){};STCountdown.timer=function(t,e,n,i){var o,r=e-t,a=864e5,s=36e5,l=6e4,c=1e3,d=function(){if(r>0){var t=r,e=Math.floor(t/a);t%=a;var o=Math.floor(t/s);t%=s;var d=Math.floor(t/l);t%=l;var p=Math.floor(t/c);n({days:e,hours:o,minutes:d,seconds:p}),r-=1e3}else r-=1e3,clearInterval(u),i()},u=setInterval((o=this,function(){d.call(o)}),1e3);return d.call(this),{abort:function(){clearInterval(u)},getTimeRemaining:function(){var t=r,e=Math.floor(t/a);t%=a;var n=Math.floor(t/s);t%=s;var i=Math.floor(t/l);return t%=l,{days:e,hours:n,minutes:i,seconds:Math.floor(t/c)}}}},function(t){const e=setInterval((()=>{window.ST_GLOBALS&&(clearInterval(e),o().then((()=>console.info("ST Sticky Cart loaded"))))}));class n{constructor(e){this.editor=e,this.wrapperEl=t.createElement("div")}render(){const{id:t,editor:e,html:n}=this.editor;this.wrapperEl.setAttribute("id","st-sticky-cart-wrapper"),this.wrapperEl.innerHTML=n;let i=window.ST_GLOBALS.product.variant.id;if(!1===window.ST_GLOBALS.product.has_only_default_variant){let t="";t+='<select id="stc-variant-select">',Object.keys(window.ST_GLOBALS.product.variants).map((e=>{const n=window.ST_GLOBALS.product.variants[e];let o="";i==n.id&&(o='selected="selected"'),t+=`<option value="${n.id}" ${o}>${n.title}</option>`})),t+="</select>",t+='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">\n                    <path d="M7.33334 1.11336C7.20843 0.989189 7.03946 0.919495 6.86334 0.919495C6.68722 0.919495 6.51825 0.989189 6.39334 1.11336L4.00001 3.47336L1.64001 1.11336C1.5151 0.989189 1.34613 0.919495 1.17001 0.919495C0.993883 0.919495 0.824915 0.989189 0.700006 1.11336C0.637521 1.17533 0.587925 1.24907 0.554079 1.33031C0.520233 1.41154 0.502808 1.49868 0.502808 1.58669C0.502808 1.6747 0.520233 1.76183 0.554079 1.84307C0.587925 1.92431 0.637521 1.99805 0.700006 2.06002L3.52667 4.88669C3.58865 4.94917 3.66238 4.99877 3.74362 5.03262C3.82486 5.06646 3.912 5.08389 4.00001 5.08389C4.08801 5.08389 4.17515 5.06646 4.25639 5.03262C4.33763 4.99877 4.41136 4.94917 4.47334 4.88669L7.33334 2.06002C7.39582 1.99805 7.44542 1.92431 7.47927 1.84307C7.51311 1.76183 7.53054 1.6747 7.53054 1.58669C7.53054 1.49868 7.51311 1.41154 7.47927 1.33031C7.44542 1.24907 7.39582 1.17533 7.33334 1.11336Z" fill="white"></path>\n                </svg>',this.wrapperEl.querySelector(".stc-select").innerHTML=t}else this.wrapperEl.querySelector(".stc-select").remove();return{id:t,editor:e,html:n,wrapperEl:this.wrapperEl}}}const i={},o=async function(){if("product"===window.ST_GLOBALS.pageType){if(!window.ST_PLAN||"ACTIVE"!==window.ST_PLAN?.status||"Advanced"!==window.ST_PLAN?.name)return;const t=window.ST_STICKY_CARTS||[];if(0===t.length)return;const e=[];let o="";if(t.map((t=>{const{id:r,status:a=!1,editor:s}=t,{countdownType:l,fontFamily:c,barWeight:d,nameWeight:u,priceWeight:p,variantWeight:h,buttonWeight:w,startDateTime:S,endDateTime:y,showCountdown:m}=s;if(a){let a=!1;if(m){const t=window.ST_GLOBALS.dateWithTimeZone(new Date,window.ST_META_DATA.timeZone);if("right_now"===l||"definite_time"===l){const e=window.ST_GLOBALS.dateWithTimeZone(y,window.ST_META_DATA.timeZone);if("right_now"===l&&e.getTime()>t.getTime()&&(a=!0),"definite_time"===l){const n=window.ST_GLOBALS.dateWithTimeZone(S,window.ST_META_DATA.timeZone);e.getTime()>n.getTime()&&e.getTime()>t.getTime()&&n.getTime()<t.getTime()&&(a=!0)}}else a=!0}else a=!0;a&&(i[r]=new n(t).render(),o+=t.css,c?.fontFamily&&(e.hasOwnProperty(c.fontFamily)?e[c.fontFamily]={...e[c.fontFamily],barWeight:d,nameWeight:u,priceWeight:p,variantWeight:h,buttonWeight:w}:e[c.fontFamily]={barWeight:d,nameWeight:u,priceWeight:p,variantWeight:h,buttonWeight:w}))}})),Object.keys(e).length){const t=Object.keys(e).map((t=>({fontFamily:t,fontWeight:[...new Set([parseInt(e[t].barWeight),parseInt(e[t].nameWeight),parseInt(e[t].priceWeight),parseInt(e[t].variantWeight),parseInt(e[t].buttonWeight)])].filter((t=>!isNaN(t)&&t>0)).sort((function(t,e){return t-e})).join(";")})));t.length&&t.map((t=>{window.ST_LOADED_FONTS.includes(t.fontFamily)||window.ST_GLOBALS.loadFont(t)}))}window.ST_GLOBALS.addStyle(o),r()}},r=async function(){for(const n in i){const o=i[n],{id:r,editor:s,wrapperEl:l}=o;t.body.insertAdjacentElement("afterbegin",l),a.parentEl=t.querySelector(".st-sticky-cart"),a.mapping=s?.mapping,a.initStickyCart(r),a.renderLayout(o,!0),e=r,fetch(window.ST_GLOBALS.apiUrl+"total-views",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:window.ST_GLOBALS.shopDomain,serviceItemID:e,serviceType:"sticky-cart"})}).then((t=>t.json())).then((async()=>{})).catch((t=>console.log(t)));let c={enable:s?.showCountdown,timeZone:s?.timeZone,startTime:s?.startDateTime,endTime:s?.endDateTime,countdownType:s?.countdownType,countdownAction:s?.whenCountdownEnds,fixedTime:s?.fixedTime};c?.enable?a.initCountdown(c):t.querySelector(".stc-bar-countdown").remove()}var e};let a={parentEl:t.querySelector(".st-sticky-cart"),product:window.ST_GLOBALS?.product,variant:window.ST_GLOBALS?.product?.variant?.id,mapping:{},outStock:window.ST_GLOBALS?.product?.available,formSelector:"",formSelectorEL:null,quantityEl:t.querySelector('input[type="text"][name="quantity"], input[type="number"][name="quantity"]'),initStickyCart(e){let n=this;this.changeQuantity(),this.changeVariant(),this.selectVariant(),this.renderLayout(),this.addToCart(e),this.initHeight(!1),this.formSelector=`form[action*="/cart/add"]:not(.installment), form[action="/${window.ST_GLOBALS.currentLanguage}/cart/add"]:not(.installment)`,this.formSelectorEL=t.querySelector(this.formSelector),null!=this.parentEl&&null!=this.formSelectorEL&&(this.initScroll(),window.addEventListener("scroll",this.initScroll.bind(this))),window.addEventListener("resize",(t=>{n.initHeight()}))},initScroll(){const e=this.formSelectorEL.offsetTop+this.formSelectorEL.offsetHeight+250;t.body.scrollTop>e||t.documentElement.scrollTop>e?this.parentEl.classList.add("show"):this.parentEl.classList.remove("show")},initHeight(e=!0){let n=this.parentEl.clientHeight;if(e){let e=t.body;e.style.paddingBottom="0px",window.matchMedia("(max-width: 767px)").matches?this.parentEl.classList.contains("mobile-bottom")&&(e.style.paddingBottom=`${n}px`):this.parentEl.classList.contains("desktop-bottom")&&(e.style.paddingBottom=`${n}px`)}this.parentEl.querySelector(".stc-added-wrapper").style.height=`${n}px`},selectVariant(){let e=this,n=t.getElementById("stc-variant-select");n&&n.addEventListener("change",(function(){e.renderCartForm(n.value,null),e.product.variant=window.ST_GLOBALS.product.variants[n.value],e.product.available=window.ST_GLOBALS.product.variants[n.value].available,e.outStock=e.product.available,e.renderLayout()}))},addToCart(e){let n=this,i=this.parentEl.querySelector(".stc-action button:not(.stc-out-stock)"),o=this.parentEl.querySelector(".stc-quantity input");i&&this.outStock&&"false"!==this.outStock&&i.addEventListener("click",(function(){let r=[];if(r.push({quantity:o.value,id:n.variant.toString().trim()}),i.classList.add("stc-loading"),n.parentEl.classList.contains("stay_page")){setTimeout((()=>{i.classList.remove("stc-loading")}),500);const e=`form[action*="/cart/add"]:not(.installment), form[action="/${window.ST_GLOBALS.currentLanguage}/cart/add"]:not(.installment)`,n=t.querySelector(e);if(null!==n){const t=n.querySelector('[type="submit"]');t?(t.click(),t.dispatchEvent(new Event("click"))):n.dispatchEvent(new Event("submit"))}}else{const e={quantity:o.value,id:n.variant},r=`form[action*="/cart/add"]:not(.installment), form[action="/${window.ST_GLOBALS.currentLanguage}/cart/add"]:not(.installment)`,a=t.querySelector(r);if(a){const t=a.querySelector('input[name="selling_plan"]');t&&(e.selling_plan=t.value)}const s={items:[e]};fetch("/cart/add.js",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)}).then((t=>t.json())).then((e=>{if("422"===e?.status||"Cart Error"===e?.message){let n=t.querySelector(".stc-warning");n.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">\n                                    <path d="M12.0005 15C11.8027 15 11.6093 15.0586 11.4449 15.1685C11.2804 15.2784 11.1523 15.4346 11.0766 15.6173C11.0009 15.8 10.9811 16.0011 11.0197 16.1951C11.0583 16.3891 11.1535 16.5673 11.2933 16.7071C11.4332 16.847 11.6114 16.9422 11.8054 16.9808C11.9993 17.0194 12.2004 16.9996 12.3831 16.9239C12.5659 16.8482 12.722 16.72 12.8319 16.5556C12.9418 16.3911 13.0005 16.1978 13.0005 16C13.0005 15.7348 12.8951 15.4804 12.7076 15.2929C12.52 15.1054 12.2657 15 12.0005 15ZM22.6705 16.47L14.6205 2.47C14.3603 2.00351 13.9802 1.61495 13.5196 1.34447C13.0591 1.07398 12.5346 0.931366 12.0005 0.931366C11.4663 0.931366 10.9419 1.07398 10.4813 1.34447C10.0207 1.61495 9.64065 2.00351 9.38046 2.47L1.38046 16.47C1.11125 16.924 0.966598 17.441 0.9611 17.9688C0.955602 18.4966 1.08945 19.0165 1.34914 19.476C1.60883 19.9356 1.98516 20.3185 2.44014 20.586C2.89512 20.8536 3.41264 20.9964 3.94046 21H20.0605C20.5925 21.0052 21.1164 20.8689 21.5784 20.6049C22.0403 20.3409 22.4238 19.9588 22.6894 19.4978C22.9551 19.0368 23.0933 18.5134 23.09 17.9813C23.0866 17.4493 22.9418 16.9277 22.6705 16.47ZM20.9405 18.47C20.8528 18.6259 20.7249 18.7555 20.5701 18.8452C20.4154 18.9349 20.2393 18.9815 20.0605 18.98H3.94046C3.76157 18.9815 3.58556 18.9349 3.43077 18.8452C3.27599 18.7555 3.14811 18.6259 3.06046 18.47C2.97269 18.318 2.92648 18.1455 2.92648 17.97C2.92648 17.7945 2.97269 17.622 3.06046 17.47L11.0605 3.47C11.1444 3.3062 11.2719 3.16873 11.4289 3.07274C11.5859 2.97675 11.7664 2.92596 11.9505 2.92596C12.1345 2.92596 12.315 2.97675 12.472 3.07274C12.629 3.16873 12.7565 3.3062 12.8405 3.47L20.8905 17.47C20.9897 17.6198 21.0467 17.7936 21.0555 17.9731C21.0643 18.1526 21.0245 18.3312 20.9405 18.49V18.47ZM12.0005 7C11.7352 7 11.4809 7.10535 11.2933 7.29289C11.1058 7.48043 11.0005 7.73478 11.0005 8V12C11.0005 12.2652 11.1058 12.5196 11.2933 12.7071C11.4809 12.8946 11.7352 13 12.0005 13C12.2657 13 12.52 12.8946 12.7076 12.7071C12.8951 12.5196 13.0005 12.2652 13.0005 12V8C13.0005 7.73478 12.8951 7.48043 12.7076 7.29289C12.52 7.10535 12.2657 7 12.0005 7Z" fill="#DB302A"/>\n                                    </svg>${e?.description}`,n.style.display="flex",setTimeout((()=>{n.style.display="none"}),3e3)}else n.parentEl.classList.add("cart-added"),setTimeout((()=>{n.parentEl.classList.remove("cart-added")}),3e3),n.parentEl.classList.contains("go_checkout")?window.location.href=`https://${window.ST_GLOBALS.shopDomain}/checkout`:n.parentEl.classList.contains("go_cart")&&(window.location.href=`https://${window.ST_GLOBALS.shopDomain}/cart`);i.classList.remove("stc-loading")}))}fetch(window.ST_GLOBALS.apiUrl+"statistic",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:window.ST_GLOBALS.shopDomain,serviceItemID:e,serviceType:"sticky-cart",variants:r})}).then((t=>t.json())).then((async({data:t})=>{})).catch((t=>console.log(t)))}))},renderLayout(e=null,n=!1){let i=this.parentEl.querySelector(".stc-title"),o=this.parentEl.querySelector(".stc-price"),r=this.parentEl.querySelector(".stc-image"),a=this.parentEl.querySelector(".stc-bar"),s=this.parentEl.querySelector(".stc-bar-text"),l=this.parentEl.querySelector(".stc-bar-countdown");i.innerText=this.product.title;let c=this.product.images[0].src;""===c&&(c=window.ST_GLOBALS.product?.images[0].src),r.innerHTML=`<img src="${c}" alt="${this.product.title}" />`;let d="";this.product.variant.compare_at_price>this.product.variant.price&&(d+=`<span><s>${this.product.variant.compare_at_price_with_format}</s></span>`),d+=this.product.variant.price_with_format,o.innerHTML=d,Object.keys(this.mapping).map((t=>{let e=this.parentEl.querySelector(t);e&&(e.innerText=window.ST_GLOBALS.translate(this.mapping[t]))}));let u=t.querySelector(".stc-action");this.product.available&&"false"!==this.product.available?u.classList.remove("outstock"):u.classList.add("outstock"),a&&(""!==s.innerText||l?a.style.display="flex":a.style.display="none"),this.initHeight()},initCountdown(t){const{countdownAction:e,countdownType:n,endTime:i,fixedTime:o,startTime:r}=t,a=window.ST_GLOBALS.dateWithTimeZone(new Date,window.ST_META_DATA.timeZone);if("right_now"===n||"definite_time"===n){const e=new Date(i);if("right_now"===n&&this._runCountdown(t,a,e),"definite_time"===n){new Date(r).getTime()<e.getTime()&&this._runCountdown(t,a,e)}}if("fixed_time"===n){const n=parseInt(o),i=new Date(a.getTime()+6e4*n);this._runCountdown(t,a,i,n,e)}},_runCountdown(t,e,n,i,o="nothing"){let r=this;const a=this.parentEl.querySelector(".stc-bar"),s=this.parentEl.querySelector(".countdown-day"),l=this.parentEl.querySelector(".countdown-hour"),c=this.parentEl.querySelector(".countdown-minute"),d=this.parentEl.querySelector(".countdown-seconds"),{countdownType:u}=t;"fixed_time"===u&&(i<60?(s.style.display="none",l.style.display="none",c.querySelector(".unit").style.display="none",d.querySelector(".unit").style.display="none",this.parentEl.querySelector(".seperate.day").style.display="none",this.parentEl.querySelector(".seperate.hour").style.display="none"):i<1440&&(s.style.display="none",this.parentEl.querySelector(".seperate.day").style.display="none"));const p=["DAYS","DAY"],h=["HRS","HRS"],w=["MINS","MIN"],S=["SECS","SEC"];STCountdown.timer(e,n,(function(t){s.querySelector(".value").innerHTML=String(t.days).padStart(2,"0"),0===t.days||t.days>=2?s.querySelector(".unit").innerHTML=p[0]:s.querySelector(".unit").innerHTML=2===p.length?p[1]:p[0],l.querySelector(".value").innerHTML=String(t.hours).padStart(2,"0"),0===t.hours||t.hours>=2?l.querySelector(".unit").innerHTML=h[0]:l.querySelector(".unit").innerHTML=2===h.length?h[1]:h[0],c.querySelector(".value").innerHTML=String(t.minutes).padStart(2,"0"),0===t.minutes||t.minutes>=2?c.querySelector(".unit").innerHTML=w[0]:c.querySelector(".unit").innerHTML=2===w.length?w[1]:w[0],d.querySelector(".value").innerHTML=String(t.seconds).padStart(2,"0"),0===t.seconds||t.seconds>=2?d.querySelector(".unit").innerHTML=S[0]:d.querySelector(".unit").innerHTML=2===S.length?S[1]:S[0]}),(function(){if(s.querySelector(".value").innerHTML="00",l.querySelector(".value").innerHTML="00",c.querySelector(".value").innerHTML="00",d.querySelector(".value").innerHTML="00",d.querySelector(".unit").innerHTML=2===S.length?S[1]:S[0],"hide_bar"===t?.countdownAction&&a&&(a.remove(),r.initHeight()),i&&"repeat"===t?.countdownAction){const e=new Date(n.getTime()+6e4*i);r._runCountdown(t,n,e,i,o)}}))},changeVariant(){let t=this;var e=history.pushState,n=history.replaceState;history.pushState=function(){e.apply(history,arguments),window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange"))},history.replaceState=function(){n.apply(history,arguments),window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange"))},window.addEventListener("popstate",(function(){window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("locationchange",(function(){var e=parseInt(t.getParamValue("variant"));e&&(t.variant=e,t.setSelectedVariant(e),t.product.variant=window.ST_GLOBALS.product.variants[e],t.product.available=window.ST_GLOBALS.product.variants[e].available,t.outStock=t.product.available,t.renderLayout())}))},getParamValue(t){for(var e=window.location.search.substring(1).split("&"),n=0;n<e.length;n++){var i=e[n].split("=");if(decodeURIComponent(i[0])===t)return decodeURIComponent(i[1])}},setSelectedVariant(e){t.getElementById("stc-variant-select").value=e},changeQuantity(){let t=this,e=this.parentEl.querySelector(".stc-minus"),n=this.parentEl.querySelector(".stc-plus"),i=this.parentEl.querySelector(".stc-quantity input"),o=this.quantityEl;o&&o.addEventListener("change",(function(e){let n=parseInt(e.target.value);!isNaN(n)&&n>1&&(i.value=n,t.renderCartForm(null,n))})),e&&e.addEventListener("click",(function(){let e=parseInt(i.value);e>1&&(o.value=i.value=e-1),t.renderCartForm(null,i.value)})),n&&n.addEventListener("click",(function(){let e=parseInt(i.value);o.value=i.value=e+1,t.renderCartForm(null,i.value)}))},renderCartForm:(e,n)=>{const i=`form[action*="/cart/add"]:not(.installment), form[action="/${window.ST_GLOBALS.currentLanguage}/cart/add"]:not(.installment)`,o=t.querySelector(i);if(null!==o){const i=o.querySelector('input[name="id"]');let r=o.querySelector('input[name="quantity"]');if(null===r){const e=t.createElement("INPUT");e.type="hidden",e.name="quantity",o.prepend(e),r=e}null!==e&&(i.value=e),null!==n&&(r.value=parseInt(n))}}}}(window.document);
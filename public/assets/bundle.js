(()=>{"use strict";const t=document.querySelectorAll(".square"),e=document.querySelector("#left-arrow"),s=document.querySelector("#right-arrow"),i=document.querySelectorAll(".dot-container"),r=new class{constructor(e){this.slider=e,this.squares=t,this.distance=3*t[0].clientWidth,this.gap=25,this.counter=0,this.dots=i}next(){this.counter=this.counter<2?this.counter+1:2,this.slider.style.transform="translateX("+(-this.distance-3*this.gap)*this.counter+"px)",this.slider.style.transition="transform 0.3s ease-in-out",this.dots.forEach((t=>{t.classList.remove("active-dot"),t.getAttribute("data-id")==this.counter&&t.classList.add("active-dot")}))}prev(){this.counter=this.counter>0?this.counter-1:0,this.slider.style.transform="translateX("+(-this.distance-3*this.gap)*this.counter+"px)",this.slider.style.transition="transform 0.3s ease-in-out",this.dots.forEach((t=>{t.classList.remove("active-dot"),t.getAttribute("data-id")==this.counter&&t.classList.add("active-dot")}))}}(document.querySelector(".companies-grid"));s.addEventListener("click",(()=>{r.next()})),e.addEventListener("click",(()=>{r.prev()}))})();
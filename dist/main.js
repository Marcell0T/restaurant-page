(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"e4442cec774f0afaeea3.jpg";console.log("it's alive."),function(){const e=document.getElementById("content"),n=document.createElement("header"),r=document.createElement("h1"),a=document.createElement("nav"),o=document.createElement("button"),i=document.createElement("button"),d=document.createElement("button");r.innerHTML="Pizzeria",o.innerHTML="Home",i.innerHTML="Menu",d.innerHTML="Contact",o.classList.add("active"),a.appendChild(o),a.appendChild(i),a.appendChild(d),n.appendChild(r),n.appendChild(a),e.appendChild(n);const c=document.createElement("div"),p=document.createElement("div"),s=document.createElement("p"),l=document.createElement("p"),u=document.createElement("p"),m=document.createElement("p"),h=document.createElement("p"),f=new Image;f.src=t,s.innerHTML="Welcome to our pizzeria!",l.innerHTML="We are a family-owned and operated restaurant located in the heart of downtown. Our passion for pizza started at a young age, and we have been perfecting our craft for over 20 years.",u.innerHTML="At our pizzeria, we use only the freshest ingredients to create our hand-tossed, wood-fired pizzas. From our classic margherita to our creative specialty pies, there is something for everyone on our menu. In addition to pizza, we also offer a variety of salads, sandwiches, and appetizers",m.innerHTML="Our restaurant has a warm and inviting atmosphere, perfect for a casual dinner with friends or a special occasion.",h.innerHTML="Thank you for choosing our pizzeria. We look forward to serving you and your loved ones delicious pizza and other dishes made with love.",c.setAttribute("id","home"),p.setAttribute("id","text"),p.appendChild(s),p.appendChild(l),p.appendChild(u),p.appendChild(m),p.appendChild(h),c.appendChild(p),c.appendChild(f),e.appendChild(c);const g=document.createElement("footer"),w=document.createElement("h2");w.innerHTML="Pizzeria",g.appendChild(w),e.appendChild(g)}()})();
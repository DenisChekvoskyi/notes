(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function k(){const o=document.querySelector(".createNote"),t=document.querySelector(".dialogOverlay"),n=document.querySelectorAll(".closeDialogButton"),e=document.querySelector("form"),a=document.querySelector(".archivingOverlay"),s=document.querySelector("#archiveAll"),i=document.querySelector(".taskViewOverlay"),v=document.querySelectorAll(".task-content"),d=document.querySelectorAll(".task-name");o.addEventListener("click",()=>{t.style.display="flex",e.reset()}),n.forEach(r=>{r.addEventListener("click",()=>{t.style.display="none",a.style.display="none",i.style.display="none"})}),t.addEventListener("click",r=>r.target===t?t.style.display="none":""),s.addEventListener("click",()=>{a.style.display="flex"}),a.addEventListener("click",r=>{r.target===a&&(a.style.display="none")}),v.forEach(r=>{r.addEventListener("click",()=>{i.style.display="flex"})}),d.forEach(r=>{r.addEventListener("click",()=>{i.style.display="flex"})}),i.addEventListener("click",r=>r.target===i?i.style.display="none":"")}const c=[{imgAlt:"Cart",imgSrc:"icons/cart.svg",taskCategory:"Task",taskContent:"Test 1",taskCreated:"02.08.2023",taskName:"Test"},{imgAlt:"Cart",imgSrc:"icons/cart.svg",taskCategory:"Task",taskContent:"Test 2",taskCreated:"02.08.2023",taskName:"Test"},{imgAlt:"Cart",imgSrc:"icons/cart.svg",taskCategory:"Task",taskContent:"Test 3",taskCreated:"02.08.2023",taskName:"Test"},{imgAlt:"Cart",imgSrc:"icons/cart.svg",taskCategory:"Task",taskContent:"Test 4",taskCreated:"02.08.2023",taskName:"Test"},{imgAlt:"Cart",imgSrc:"icons/cart.svg",taskCategory:"Task",taskContent:"Test 5",taskCreated:"02.08.2023",taskName:"Test"},{imgAlt:"Cart",imgSrc:"icons/cart.svg",taskCategory:"Task",taskContent:"Test 6",taskCreated:"02.08.2023",taskName:"Test"},{imgAlt:"Cart",imgSrc:"icons/cart.svg",taskCategory:"Task",taskContent:"Test 7",taskCreated:"02.08.2023",taskName:"Test"}];function C(o){const t=o.split("."),n=t[0],e=parseInt(t[1],10)-1,a=t[2];return`${["January","February","March","April","May","June","July","August","September","October","November","December"][e]} ${n}, ${a}`}function m(){const o=document.querySelector(".task");o.innerHTML="",c.forEach((t,n)=>{const e=document.createElement("div");e.classList.add("task-info");const a=t.taskName.length>16?`${t.taskName.substring(0,16)}...`:t.taskName,s=t.taskContent.length>16?`${t.taskContent.substring(0,16)}...`:t.taskContent;let i="";try{i=t.taskDates.length>16?`${t.taskDates.substring(0,16)}...`:t.taskDates}catch{}e.innerHTML=`
          <img class="task-img" src=${t.imgSrc} alt=${t.imgAlt} />
          <div data-index=${n} class="task-name">${a}</div>
          <div class="task-created">${C(t.taskCreated)}</div>
          <div class="task-category">${t.taskCategory}</div>
          <div data-index=${n} class="task-content">${s}</div>
          <div class="tast-dates">${i}</div>
          <div class="task-nav">
            <img data-index=${n} src="icons/edit.svg" alt="edit" />
            <img data-index=${n} src="icons/folderblackdownload.svg" alt="archive" />
            <img data-index=${n} src="icons/empty_trash.png" alt="delete" />
          </div>
      `,o.appendChild(e)})}function f(){const o=/\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;c.forEach(t=>{const e=t.taskContent.match(o);e&&(t.taskDates=e.join(", "))})}const y=[];function u(){const o=[{img:"icons/cart.svg",alt:"Cart",name:"Task",active:0,archived:0},{img:"icons/head.svg",alt:"Head",name:"Random Thought",active:0,archived:0},{img:"icons/lamp.svg",alt:"Lamp",name:"Idea",active:0,archived:0}];function t(e,a,s){return["Task","Random Thought","Idea"].forEach((v,d)=>{const r=a.filter(g=>g.taskCategory===v).length,l=e.filter(g=>g.taskCategory===v).length;s[d].active+=r,s[d].archived+=l}),[...s]}t(y,c,o);const n=document.querySelector(".taskBrief");n.innerHTML="",o.forEach(e=>{if(e.active>0||e.archived>0){const a=document.createElement("div");a.classList.add("task-info"),a.innerHTML=`
          <img class='task-img' src=${e.img} alt=${e.alt} />
          <div class='task-name'>${e.name}</div>
          <div>${e.active}</div>
          <div>${e.archived}</div>
    `,n.appendChild(a)}})}function p(){const o=document.querySelector("form"),t=document.querySelector(".dialogOverlay"),n=document.querySelector(".createNote");o.addEventListener("submit",e=>{e.preventDefault();const a=document.querySelector("#name").value,s=document.querySelector("#category").value,i=document.querySelector("#text").value,v=new Date().toLocaleDateString();let d,r;switch(s){case"Task":d="icons/cart.svg",r="Cart";break;case"Random Thought":d="icons/head.svg",r="Head";break;case"Idea":d="icons/lamp.svg",r="Lamp"}const l=o.getAttribute("data-index");if(l!==null)c[l].taskName=a,c[l].taskCategory=s,c[l].taskContent=i,c[l].imgSrc=d,c[l].imgAlt=r;else{const g={imgSrc:d,imgAlt:r,taskName:a,taskCategory:s,taskContent:i,taskCreated:v};c.push(g)}f(),m(),k(),u(),o.reset(),t.style.display="none"}),n.addEventListener("click",()=>{o.removeAttribute("data-index")})}function T(){const o=document.querySelector(".task"),t=document.querySelector("#deleteAll");o.addEventListener("click",n=>{if(n.target&&n.target.alt==="delete"&&confirm("Do you want to delete a task? Recovery will not be possible!")){const s=n.target.dataset.index;c.splice(s,1),m(),k(),u()}}),t.addEventListener("click",()=>{c.length&&confirm("Do you want to delete all tasks? Recovery will be impossible!")&&(c.splice(0,c.length+1),m(),k(),u())})}function S(){const o=document.querySelector(".dialogOverlay"),t=document.querySelector(".task"),n=document.querySelector("form");t.addEventListener("click",e=>{if(e.target&&e.target.alt==="edit"){o.style.display="flex";const s=e.target.dataset.index;document.querySelector("#name").value=c[s].taskName,document.querySelector("#category").value=c[s].taskCategory,document.querySelector("#text").value=c[s].taskContent,n.setAttribute("data-index",s)}}),m(),u()}function h(){const o=document.querySelector(".archive");if(o.innerHTML="<h2>Archive is kept here</h2>",y.length>0)y.forEach((t,n)=>{const e=document.createElement("div");e.classList.add("task-info");const a=t.taskName.length>16?`${t.taskName.substring(0,16)}...`:t.taskName,s=t.taskContent.length>16?`${t.taskContent.substring(0,16)}...`:t.taskContent;e.innerHTML=`
          <img class="task-img" src=${t.imgSrc} alt=${t.imgAlt} />
          <div class="task-name">${a}</div>
          <div class="task-created">${t.taskCreated}</div>
          <div class="task-category">${t.taskCategory}</div>
          <div class="task-content">${s}</div>
          <div class="tast-dates">${t.taskDates?t.taskDates:""}</div>
          <div class="task-nav">
            <img id="archiveBtn" data-index=${n} src="icons/folderblackdownload.svg" alt="archive" />
          </div>
      `,o.appendChild(e)});else{const t=document.createElement("h3");t.innerHTML="To display tasks, you need to archive the task from the main menu",o.appendChild(t)}}function L(){document.querySelector(".task").addEventListener("click",t=>{if(t.target&&t.target.alt==="archive"){const e=t.target.dataset.index;y.push(c[e]),c.splice(e,1),m(),h(),k(),u()}})}function $(){document.querySelector(".archive").addEventListener("click",t=>{if(t.target&&t.target.alt==="archive"){const e=t.target.dataset.index,a=y.splice(e,1)[0];c.push(a),h(),m(),k(),u()}})}function E(){function o(n){const e=document.querySelector(".taskViewContainer");e.innerHTML="";const a=document.createElement("div");a.innerHTML=`
  <div class='viev'>Category: ${c[n].taskCategory}</div>
  <div class='viev'>Name: ${c[n].taskName}</div>
  <div class='viev'>Text: ${c[n].taskContent}</div>
  ${c[n].taskDates?`<div class="viev">Dates: ${c[n].taskDates}</div>`:""}
`,e.appendChild(a)}function t(n){const e=n.target.closest(".task-content")||n.target.closest(".task-name");if(e){const a=e.getAttribute("data-index");o(a)}}document.querySelector(".task").addEventListener("click",t)}document.addEventListener("DOMContentLoaded",()=>{m(),T(),p(),f(),S(),h(),L(),$(),E(),k(),u()});

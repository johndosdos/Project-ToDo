(()=>{"use strict";function e(){return{userInput:document.getElementById("userInput"),createNoteBtn:document.getElementById("createBtn"),mainSection:document.querySelector(".mainSection"),todoList:document.querySelector(".todoList")}}!function(){const t=e().userInput,n=e().createNoteBtn,o=e().mainSection,c=e().todoList;let d=1;function i(){const e=document.createElement("input");e.type="checkbox",e.name="note",e.id=`note${d}`;const n=document.createElement("label");n.htmlFor=`note${d}`,n.textContent="";const i=document.createElement("li");i.className=`noteContainer${d}`,""!==t.value&&(n.textContent=t.value,i.appendChild(e),i.appendChild(n),c.appendChild(i),o.appendChild(c),t.value="",d+=1)}t.addEventListener("keydown",(function(e){"Enter"===e.key&&i()})),n.addEventListener("click",i),function(e){e.addEventListener("dblclick",(function(t){"LI"===t.target.tagName&&e.removeChild(t.target)}))}(c)}()})();
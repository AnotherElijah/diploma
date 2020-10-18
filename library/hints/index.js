import {controllableElems} from "./collections/controllable-elems";
import Mousetrap from "mousetrap";

const hintClass = 'hint';

export function getHints(){
  controllableElems.map(item=>{
    item.elem.classList.add(hintClass);
  })
}
export function removeHints(){
  Array.from(document.querySelectorAll(hintClass)).map((elem)=>{
    console.log(elem)
    elem.classList.remove(hintClass)
    console.log(elem)

  })
}

// styleElem.innerHTML = "#theDiv:before {background: black;}";
(document.body.onload = function (){
  Mousetrap.bind('shift+q', ()=>{
    getHints()
    Mousetrap.bind('shift+q', ()=>removeHints())
  })

})();

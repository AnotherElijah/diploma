import Mousetrap from "mousetrap";
import {store} from '../redux/store'

const hintClass = 'hint';

export function setHints(){
  store.getState().controllableElems.map(item=>{
    item.classList.add(hintClass);
  })
}

export function removeHints(){
  Array.from(document.querySelectorAll('.'+hintClass)).map((elem)=>{
    elem.classList.remove(hintClass)
  });
}

function hintsOn() {
  Mousetrap.bind('shift+q', ()=>{
    setHints()
    hintsOff()
  })
}

function hintsOff() {
  Mousetrap.bind('shift+q', ()=>{
    removeHints()
    hintsOn()
  })
}

export function showHints (){
  hintsOn(hintsOff)
}

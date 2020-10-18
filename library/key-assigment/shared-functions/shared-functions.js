import Mousetrap from "mousetrap";
import {controllableElems} from "../../hints/collections/controllable-elems";

export function setFocus(elem, key){
  if(!elem.style.position) elem.style.position = 'relative';

  if(key){
    elem.setAttribute('ctrlKey', key);
    Mousetrap.bind(key, function() {
      elem.focus()
    });
    controllableElems.push({elem, key});
  }
}

export function deactivateParent(elem) {
  elem.removeAttribute('id');
  elem.classList.remove('chosen');
}


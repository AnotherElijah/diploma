import Mousetrap from "mousetrap";
import {store} from "../../redux/store";
import {addControllableChildren, addCurrentBlock} from "../../redux/actions";
import {ActivationTagsInstance} from "../collections/elems";

export function setFocus(elem, key){
  if(!elem.style.position) elem.style.position = 'relative';

  if(key){
    elem.setAttribute('ctrlKey', key);
    Mousetrap.bind(key, function() {
      elem.focus()
    });
  }
}

export function deactivateCurrentBlock() {
  const elem = store.getState().currentBlock;
  elem.removeAttribute('id');
  elem.classList.remove('chosen');
}

export function activateBlock(block){
  store.dispatch(addCurrentBlock(block));
  store.dispatch(addControllableChildren(Array.from(block.querySelectorAll([ActivationTagsInstance.activationTagsNames]))));
  block.classList.add('chosen');
  //showHints()
}

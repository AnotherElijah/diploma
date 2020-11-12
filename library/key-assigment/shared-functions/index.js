import Mousetrap from "mousetrap";
import {store} from "../../redux/store";
import {addControllableChildren, addCurrentBlock} from "../../redux/actions";
import {ActivationTagsInstance} from "../collections/elems";

export function setFocus(elem, key){
  if(!elem.style.position
    && !elem.classList.contains('carousel-control-prev')
    && !elem.classList.contains('carousel-control-next')
  ) elem.style.position = 'relative';

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
  if(block.classList.contains('carousel-wrapper')){
    Mousetrap.bind('left', ()=>{
      block.querySelector('.carousel-control-prev').click()
    })
    Mousetrap.bind('right', ()=>{
      block.querySelector('.carousel-control-next').click()
    })
  }else{
    store.dispatch(addControllableChildren(Array.from(block.querySelectorAll([ActivationTagsInstance.activationTagsNames]))));
  }
  store.dispatch(addCurrentBlock(block));
  block.classList.add('chosen');
  //showHints()
}

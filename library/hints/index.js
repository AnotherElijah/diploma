import Mousetrap from "mousetrap";
import {store} from '../redux/store'
import {hintsOn, hintsOff} from "../redux/actions";

const hintClass = 'hint';

export function setHints(controllableElems) {
  controllableElems.map(item => {
    item.classList.add(hintClass);
  })
}

export function removeHints() {
  Array.from(document.querySelectorAll('.' + hintClass)).map((elem) => {
    elem.classList.remove(hintClass)
  });
}

export function toggleHints() {
  //TODO bag somewhere here
  Mousetrap.bind('shift+q', () => {
    if(store.getState().hints){
      removeHints()
      return store.dispatch(hintsOff())
    }
    setHints(store.getState().controllableChildren === 0?store.getState().navBlocks:store.getState().controllableChildren)
    store.dispatch(hintsOn())
  })
}


export function handleHints() {
  if(store.getState().hints){
    toggleHints()
    autoHints()
  }
}

store.subscribe(handleHints);

export function autoHints() {
  const _store = store.getState()
  if (_store.controllableChildren.length > 0) {
    removeHints()
    setHints(store.getState().controllableChildren)
  }
  if (_store.controllableChildren.length === 0 && _store.navBlocks) {
    removeHints()
    setHints(store.getState().navBlocks)
  }
}

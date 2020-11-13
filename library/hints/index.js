import Mousetrap from "mousetrap";
import {store} from '../redux/store'
import {hintsOn, hintsOff} from "../redux/actions";

const CLASS_HINT = 'hint-ctrtllib';

export function setHints(controllableElems) {
  controllableElems.map(item => {
    item.classList.add(CLASS_HINT);
  })
}

export function removeHints() {
  Array.from(document.querySelectorAll('.' + CLASS_HINT)).map((elem) => {
    elem.classList.remove(CLASS_HINT)
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
  constHint()
  if (_store.controllableChildren.length > 0) {
    removeHints()
    setHints(store.getState().controllableChildren)
  }
  if (_store.controllableChildren.length === 0 && _store.navBlocks) {
    removeHints()
    setHints(store.getState().navBlocks)
  }
}

function constHint() {
  const container = document.createElement("div");
  container.classList.add("const-notification-ctrllib");
  const node = document.createTextNode("Toggle hints: 'Tab'+'Q' U+2424 Toggle hints: 'Tab'+'Q'");
  container.appendChild(node);
  document.querySelector("body").prepend(container)
}

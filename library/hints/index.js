import Mousetrap from "mousetrap";
import {store} from '../redux/store'

const hintClass = 'hint';

export function setHints(controllableElems)
{
  controllableElems.map(item => {
    item.classList.add(hintClass);
  })
}

export function removeHints()
{
  Array.from(document.querySelectorAll('.' + hintClass)).map((elem) => {
    elem.classList.remove(hintClass)
  });
}

export function hintsOn()
{
  Mousetrap.bind('shift+q', () => {
    setHints()
    hintsOff()
  })
}

export function hintsOff()
{
  Mousetrap.bind('shift+q', () => {
    removeHints()
    hintsOn()
  })
}

export function showHints()
{
  hintsOn(hintsOff)
}

export function autoHints() {
  const _store = store.getState()
  if(_store.controllableChildren.length > 0){
    removeHints()
    setHints(store.getState().controllableChildren)
  }
  if(_store.controllableChildren.length === 0 && _store.navBlocks){
    removeHints()
    setHints(store.getState().navBlocks)
  }
}

store.subscribe(autoHints);

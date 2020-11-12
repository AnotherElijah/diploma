import {store} from "../../redux/store";
import {addAllElems, addNavBlocks} from "../../redux/actions";

class ActivationTags {
  constructor() {
    this.activationTagsNames = ['a', 'input', 'button'];
    this.activationTags = Array.from(document.querySelectorAll(this.activationTagsNames));
  }
}

class Navs{
  constructor(){
    this.navs = Array.from(document.querySelectorAll(['.nav', '.navbar-nav', '.carousel-wrapper']));
    this.freeElems = findFreeElems(AllActivationElemsInstance.elems)
    store.dispatch(addNavBlocks([...this.navs, ...this.freeElems]));
  }
}

class AllActivationElems{
  constructor(){
    this.elems = Array.from(document.querySelectorAll(['a', 'button']));
  }
}

const findFreeElems = (elems) => {
  return elems.filter(elem=>elem.closest('.nav')===null&&elem.closest('.navbar-nav')===null&&elem.closest('.carousel-wrapper')===null)
}

export const AllActivationElemsInstance = new AllActivationElems();
export const ActivationTagsInstance = new ActivationTags();
export const NavsInstance = new Navs();


export function dispatchAllElems(){
  store.dispatch(addAllElems([
    ...NavsInstance.navs,
    ...ActivationTagsInstance.activationTags,
  ]));
}

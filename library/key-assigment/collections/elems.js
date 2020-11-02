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
    this.navs = Array.from(document.querySelectorAll(['.nav', '.navbar-nav']));
    store.dispatch(addNavBlocks(this.navs));
  }
}

export const ActivationTagsInstance = new ActivationTags();
export const NavsInstance = new Navs();

export function dispatchAllElems(){
  store.dispatch(addAllElems([...NavsInstance.navs, ...ActivationTagsInstance.activationTags]));
}

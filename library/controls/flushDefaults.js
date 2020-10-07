import {allElems} from "../element-set/collection";

export function deactivateTabindex (){
  allElems().map(elem=>elem.setAttribute('tabindex', '-1'))
}

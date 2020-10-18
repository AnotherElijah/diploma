import {allElems} from "../collections/elems";

export function deactivateTabindex (){
  allElems.map(elem=>elem.setAttribute('tabindex', '-1'))
}

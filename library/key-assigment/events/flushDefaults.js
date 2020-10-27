export function deactivateTabindex (elems){
  elems.map(elem=>elem.setAttribute('tabindex', '-1'))
}

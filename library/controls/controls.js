export function assignTab(elems){
  elems.forEach((elem, i)=> {
    elem.setAttribute('tabindex', i)
  })
}

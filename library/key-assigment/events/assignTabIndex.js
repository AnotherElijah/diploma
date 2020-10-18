let tabIndexNum = 0;
export function assignTabIndex(elems) {
  elems.map((elem)=>{
    elem.setAttribute('tabindex', tabIndexNum);
    tabIndexNum++;
  })
}

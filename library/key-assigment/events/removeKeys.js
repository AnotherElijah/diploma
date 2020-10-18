import Mousetrap from "mousetrap";

export function removeKeys(elems){
  elems.map((elem, i)=>{
    Mousetrap.reset();
  })
}

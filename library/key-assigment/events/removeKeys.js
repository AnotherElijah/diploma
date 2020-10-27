import Mousetrap from "mousetrap";

export function removeKeys(elems){
  elems.map((elem)=>{
    console.log(elem)
    Mousetrap.reset();
  })
}

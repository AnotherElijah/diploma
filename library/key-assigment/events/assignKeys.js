import {keys} from "../collections/keys";

export function assignKeys(elems, callback){
  elems.map((elem, i)=>{callback(elem, keys[i])})
}


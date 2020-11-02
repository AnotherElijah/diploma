import {keys} from "../collections/keys";
import Mousetrap from "mousetrap";

class KeyBinding {

  assignKeys(elems, callback) {
    elems.map(
      (elem, i) => {
        callback(elem, keys[i])
      }
    )
  }

  assignTabIndex(elems) {
    let tabIndexNum = 0;
    elems.map((elem)=>{
      elem.setAttribute('tabindex', tabIndexNum);
      tabIndexNum++;
    })
  }

  removeKeys(elems){
    elems.map((elem)=>{
      Mousetrap.reset();
    })
  }

  deactivateTabindex (elems){
    elems.map(elem=>elem.setAttribute('tabindex', '-1'))
  }
}

export const keyBinding = new KeyBinding();

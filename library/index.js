import {assignTab} from "./controls/controls";
import {deactivateTabindex} from "./controls/flushDefaults";
import {keys} from "./controls/keyboard/keys"
import Mousetrap from 'mousetrap';
import {allElems, navs} from "./element-set/collection";

document.body.onload = function () {
  deactivateTabindex();
  const _navs = navs();
  //assignTab(elems)

  // set tabindex to -1
  /*elems.map((elem, i)=>{
    console.log(elem)
    elem.setAttribute('tabindex', -1)
    if(keys[i]){

      Mousetrap.bind(keys[i], function(e, combo) {
        elem.focus()
      });
    }
  })*/
  /*elems.map(item=>item.addEventListener('focus', function(){
    /!*console.log(item === document.activeElement)
    console.log(item)*!/
  }))*/
  _navs.map((elem, i)=>{
    console.log(_navs)
    elem.setAttribute('tabindex', i);
    if(keys[i]){
      Mousetrap.bind(keys[i], function(e, combo) {
        elem.focus()
        console.log(
        elem === document.activeElement)
      });
    }
  })
}

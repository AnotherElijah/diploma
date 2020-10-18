import {deactivateTabindex} from "./events/flushDefaults";
import {activationTagsNames, navs} from "./collections/elems";
import {assignTabIndex} from "./events/assignTabIndex";
import {assignKeys} from "./events/assignKeys";
import Mousetrap from "mousetrap";
import {deactivateParent, setFocus} from "./shared-functions/shared-functions";
import {getHints} from "../hints";

document.body.onload = function () {

  deactivateTabindex();
  assignTabIndex(navs)
  assignKeys(navs, setFocus)

  // assign key for children
  navs.map(parent=>{
    parent.addEventListener('focus', ()=>{
      parent.setAttribute('id', 'focused');
      Mousetrap.bind('enter', function(){
        parent.classList.add('chosen');
        const childElems = Array.from(parent.querySelectorAll([activationTagsNames]));
        assignKeys(childElems, setFocus);
      })
    });

    parent.addEventListener('blur', ()=>deactivateParent(parent))
  });
};

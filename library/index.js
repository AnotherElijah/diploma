import {setFocus} from "./key-assigment/shared-functions";
import {dispatchAllElems} from "./key-assigment/collections/elems";
import Mousetrap from "mousetrap";
import {store} from './redux/store';
import {keyAssignmentMain} from './key-assigment'
import {keyBinding} from './key-assigment/events'
import './notofication'
import './run-up'
import {hintsOn} from "./redux/actions";
import {constHint, setHints} from "./hints";

document.body.onload = function () {
  Mousetrap.bind('shift+q', () => {
    store.dispatch(hintsOn())
    setHints(store.getState().navBlocks)
  })
  let navBlocks;
  let controllableChildren;

  store.subscribe(
    () => {
      if (store.getState().hints === true) {
        if (store.getState().navBlocks) navBlocks = store.getState().navBlocks;
        if (store.getState().controllableChildren) controllableChildren = store.getState().controllableChildren;

        if (navBlocks.length > 0) {

          /*Initiate keys*/
          if (store.getState().allElems) {
            keyBinding.deactivateTabindex(store.getState().allElems);
          }

          keyBinding.assignTabIndex(navBlocks);
          keyBinding.assignKeys(navBlocks, setFocus);

          navBlocks.map(navBlock => {
            navBlock.addEventListener('focus', () => {
              keyAssignmentMain.onEnter(navBlock)
            })
          });
        }

        if (controllableChildren.length > 0) {
          keyBinding.deactivateTabindex(store.getState().allElems);
          keyBinding.assignTabIndex(controllableChildren);
          keyBinding.removeKeys(navBlocks);
          keyBinding.assignKeys(controllableChildren, setFocus);

          Mousetrap.bind('escape', () => {
            keyAssignmentMain.onEsc()
          })
        }
      }
    }
  );
  dispatchAllElems()

};

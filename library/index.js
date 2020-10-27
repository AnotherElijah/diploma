import {deactivateTabindex} from "./key-assigment/events/flushDefaults";
import {getNavs} from "./key-assigment/collections/elems";
import {assignTabIndex} from "./key-assigment/events/assignTabIndex";
import {assignKeys} from "./key-assigment/events/assignKeys";
import Mousetrap from "mousetrap";
import {activateBlock, deactivateCurrentBlock, setFocus} from "./key-assigment/shared-functions/shared-functions";
import './hints';
import {store} from './redux/store'
import {removeControllableChildren, removeCurrentBlock} from "./redux/actions";
import {removeKeys} from "./key-assigment/events/removeKeys";

document.body.onload = function () {
  let navBlocks;
  let controllableChildren;

  store.subscribe(
    () => {
      if (store.getState().navBlocks) navBlocks = store.getState().navBlocks;
      if (store.getState().controllableChildren) controllableChildren = store.getState().controllableChildren;

      if (navBlocks.length > 0) {
        /*Initiate keys*/
        if (store.getState().allElems) {
          deactivateTabindex(store.getState().allElems);
        }
        assignTabIndex(navBlocks);
        assignKeys(navBlocks, setFocus);

        navBlocks.map(navBlock => {
          navBlock.addEventListener('focus', () => {
            Mousetrap.bind('enter', function () {
              activateBlock(navBlock);
            });
          })
        });
      }

      if (controllableChildren.length > 0) {

        deactivateTabindex(store.getState().allElems);
        assignTabIndex(controllableChildren);
        removeKeys(navBlocks);
        assignKeys(controllableChildren, setFocus);

        Mousetrap.bind('escape', () => {
          deactivateCurrentBlock();
          removeKeys(controllableChildren);
          deactivateTabindex(controllableChildren);
          store.dispatch(removeControllableChildren());
          store.dispatch(removeCurrentBlock());
        })
      }
    }
  );
  getNavs();
};


import Mousetrap from "mousetrap";
import {store} from './../redux/store';
import {activateBlock, deactivateCurrentBlock} from "./shared-functions";
import {removeControllableChildren, removeCurrentBlock} from "../redux/actions";
import {keyBinding} from './../key-assigment/events'

class KeyAssignmentMain {
  onEnter(navBlock) {
    Mousetrap.bind('enter', function () {
      activateBlock(navBlock);
    });
  }

  onEsc(){
    deactivateCurrentBlock();
    keyBinding.removeKeys(store.getState().controllableChildren);
    keyBinding.deactivateTabindex(store.getState().controllableChildren);
    store.dispatch(removeControllableChildren());
    store.dispatch(removeCurrentBlock());
  }

}

export const keyAssignmentMain = new KeyAssignmentMain();

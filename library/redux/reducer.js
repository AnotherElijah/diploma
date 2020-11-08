import {
  ADD_ALL_ELEMS,
  ADD_CONTROLLABLE_CHILDREN,
  ADD_CURRENT_BLOCK,
  ADD_NAV_BLOCKS,
  HINTS_OFF,
  HINTS_ON,
  REMOVE_CONTROLLABLE_CHILDREN,
  REMOVE_CURRENT_BLOCK
} from "./actions";

export function testReducer(state = [], action) {
  switch (action.type) {
    case ADD_ALL_ELEMS:
      return {...state, allElems: [...action.payload]};
    case ADD_NAV_BLOCKS:
      return {...state, navBlocks: [...action.payload]};
    case ADD_CURRENT_BLOCK:
      return {...state, currentBlock: action.payload};
    case REMOVE_CURRENT_BLOCK:
      return {...state, currentBlock: null};
    case ADD_CONTROLLABLE_CHILDREN:
      return {...state, controllableChildren: [...action.payload]};
    case REMOVE_CONTROLLABLE_CHILDREN:
      return {...state, controllableChildren: []};
    case HINTS_ON:
      return {...state, hints: true};
    case HINTS_OFF:
      return {...state, hints: false};
    default:
      return {...state}
  }
}

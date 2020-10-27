export const TEST = 'TEST';
export const ADD_NAV_BLOCKS = 'ADD_NAV_BLOCKS';
export const ADD_CONTROLLABLE_CHILDREN = 'ADD_CONTROLLABLE_CHILDREN';
export const ADD_ALL_ELEMS = 'ADD_ALL_ELEMS';
export const ADD_CURRENT_BLOCK = 'ADD_CURRENT_BLOCK';
export const REMOVE_CONTROLLABLE_CHILDREN = 'REMOVE_CONTROLLABLE_CHILDREN';
export const REMOVE_CURRENT_BLOCK = 'REMOVE_CURRENT_BLOCK';

export const addNavBlocks = (navBlocks = []) => {
  return {
    type: ADD_NAV_BLOCKS,
    payload: navBlocks
  }
};

export const addControllableChildren = (controllableChildren = []) => {
  return {
    type: ADD_CONTROLLABLE_CHILDREN,
    payload: controllableChildren
  }
};

export const addAllElems = (allElems = []) => {
  return {
    type: ADD_ALL_ELEMS,
    payload: allElems
  }
};

export const addCurrentBlock = (block) => {
  return {
    type: ADD_CURRENT_BLOCK,
    payload: block
  }
}
export const removeCurrentBlock = (block = []) => {
  return {
    type: REMOVE_CURRENT_BLOCK,
  }
};
export const removeControllableChildren = (controllableElements = []) => {
  return {
    type: REMOVE_CONTROLLABLE_CHILDREN,
  }
};

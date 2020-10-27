import {store} from "../../redux/store";
import {addAllElems, addNavBlocks} from "../../redux/actions";

export const activationTagsNames = ['a', 'input', 'button'];

export const getActivationTags = () => Array.from(document.querySelectorAll(activationTagsNames));
export const activationTags = [...getActivationTags()];

export const getNavs = () => {
  const elems = Array.from(document.querySelectorAll(['.nav', '.navbar-nav']))

  store.dispatch(addNavBlocks(elems))
  store.dispatch(addAllElems([...elems, ...activationTags]))
};


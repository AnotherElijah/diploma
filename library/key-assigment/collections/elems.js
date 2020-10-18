
export const activationTagsNames = ['a', 'input', 'button'];

export const getActivationTags = () => Array.from(document.querySelectorAll(activationTagsNames));
export const getNavs = () => Array.from(document.querySelectorAll(['.nav', '.navbar-nav']));

export const activationTags = [...getActivationTags()];
export const navs = [...getNavs()];
export const allElems = [...activationTags, ...navs];

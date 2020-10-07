export function allElems(){
  const tags = ['a', 'input', 'button'];

  return Array.from(document.querySelectorAll(tags));
}
export function navs(){
  return Array.from(document.querySelectorAll('.nav'));
}

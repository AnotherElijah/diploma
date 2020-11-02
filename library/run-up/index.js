function implementFiles(parent, child) {
  const parentElem = document.querySelector(parent);
  parentElem.appendChild(child)
}

function crateElem (elem, path) {
  const newElem = document.createElement(elem);

  if(elem==='script') {
    newElem.type = 'script';
    newElem.src = path
  } else if(elem==='link'){
    newElem.type = 'text/css';
    newElem.rel = 'stylesheet';
    newElem.href = path

  }
  return newElem
}

const newElem = crateElem('link', '/library/index.css');

implementFiles('body', newElem);

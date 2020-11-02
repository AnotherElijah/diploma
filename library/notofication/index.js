//TODO add btn and assign hints event

function createNotification() {
  const para = document.createElement("div");
  const node = document.createTextNode("Type 'tab'+'Q' to activate accessible navigation");
  para.appendChild(node);
  para.classList.add('notification');
  para.onclick = ()=>para.classList.add('slide-up');
  return para
}

function appendElem() {
  document.querySelector("body").prepend(createNotification());
}

function stylize() {

}

appendElem()

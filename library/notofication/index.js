//TODO add btn and assign hints event

import {store} from '../redux/store'
import {hintsOn} from "../redux/actions";
import {setHints} from "../hints";

function createNotification() {
  const container = document.createElement("div");
  const node = document.createTextNode("Type 'tab'+'Q' to activate accessible navigation");
  container.appendChild(node);
  container.classList.add('notification');
  const button = document.createElement("button");
  const buttonText = document.createTextNode("Run now");
  button.appendChild(buttonText);
  container.appendChild(button);

  button.onclick = () => {
    container.classList.add('slide-up');
    store.dispatch(hintsOn())
    setHints(store.getState().navBlocks)
  };
  return container
}

function appendElem() {
  document.querySelector("body").prepend(createNotification());
}

appendElem();

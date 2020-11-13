//TODO add btn and assign hints event

import {store} from '../redux/store'
import {hintsOn} from "../redux/actions";
import {setHints} from "../hints";

function createNotification() {
  const container = document.createElement("div");
  const node = document.createTextNode("Type 'Shift'+'Q' to activate accessible navigation, or 'Run now' button");
  container.appendChild(node);
  container.classList.add('notification-ctrllib');
  const button1 = document.createElement("button");
  const buttonText1 = document.createTextNode("Run now");
  button1.appendChild(buttonText1);
  button1.classList.add('notification-btn-1-ctrllib');
  button1.onclick = () => {
    container.classList.add('slide-up-ctrllib')
    store.dispatch(hintsOn())
    setHints(store.getState().navBlocks)
  };

  container.appendChild(button1);

  const button2 = document.createElement("button");
  const buttonText2 = document.createTextNode("Close");
  button2.appendChild(buttonText2);
  button2.classList.add('notification-btn-2-ctrllib');
  button2.onclick = () => {
    container.classList.add('slide-up-ctrllib')
  };

  container.appendChild(button2);

  return container
}

function appendElem() {
  document.querySelector("body").prepend(createNotification());
}

appendElem();

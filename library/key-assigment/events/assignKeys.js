import {keys} from "../collections/keys";
import {store} from '../../redux/store'

export function assignKeys(elems, callback) {
  elems.map(
    (elem, i) => {
      callback(elem, keys[i])
    }
  )
}


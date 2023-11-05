import { findIndex, remove } from "lodash";

function removeOneItem(array, value) {
    let isItemFound = findIndex(array, (word) => word === value);
    remove(array, (word, index) => index === isItemFound);
    isItemFound = isItemFound < 0 ? false : true;
    return isItemFound;
  }

const g = [1,2,3,4,5,1]

g
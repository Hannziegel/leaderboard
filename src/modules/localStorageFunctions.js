import { createScoresListHTML } from '../modules/pageFunctions';

export function setLocalStorage(listArray) {
  localStorage.setItem('data', JSON.stringify(listArray));
  console.log('setLocalStorage: listArray = ', listArray)
};

export function checkLocalStorage(listArray) {
  if (localStorage.getItem('data') !== null) {
    listArray = JSON.parse(localStorage.getItem('data'));
    createScoresListHTML(listArray);
  } else {
    return listArray = [];
  }
};

export function getLocalStorageArr() {
  return JSON.parse(localStorage.getItem('data'))
}

export async function setLocalStorageID(localID) {
  localStorage.setItem('id', JSON.stringify(localID));
  console.log('setLocalStorageID localID = ', localID);
}

export function getLocalStorageID() {
  return JSON.parse(localStorage.getItem('id'))
}

export function checkLocalStorageID() {
  if(localStorage.getItem('id') !== null) {
    return true
  }
  return false
}
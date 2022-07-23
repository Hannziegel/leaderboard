import { createScoresListHTML } from '../modules/pageFunctions.js';

export function setLocalStorage(listArray) {
  localStorage.setItem('data', JSON.stringify(listArray));
}

export function checkLocalStorage(listArray) {
  if (localStorage.getItem('data') !== null) {
    listArray = JSON.parse(localStorage.getItem('data'));
    createScoresListHTML(listArray);
  } else {
    listArray = [];
  }
}

export function getLocalStorageArr() {
  return JSON.parse(localStorage.getItem('data'));
}

export async function setLocalStorageID(localID) {
  localStorage.setItem('id', JSON.stringify(localID));
}

export function getLocalStorageID() {
  return JSON.parse(localStorage.getItem('id'));
}

export function checkLocalStorageID() {
  if (localStorage.getItem('id') !== null) {
    return true;
  }
  return false;
}
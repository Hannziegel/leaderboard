import { createScoresListHTML } from './pageFunctions.js';

export const setLocalStorage = (listArray) => {
  localStorage.setItem('data', JSON.stringify(listArray));
}

export const checkLocalStorage  = (listArray) =>   {
  if (localStorage.getItem('data') !== null) {
    listArray = JSON.parse(localStorage.getItem('data'));
    createScoresListHTML(listArray);
  } else {
    listArray = [];
  }
}

export const getLocalStorageArr = () =>  {
  return JSON.parse(localStorage.getItem('data'));
}

export  const setLocalStorageID = async (localID) => {
  localStorage.setItem('id', JSON.stringify(localID));
}

export const getLocalStorageID = () => {
  return JSON.parse(localStorage.getItem('id'));
}

export const checkLocalStorageID = () =>  {
  if (localStorage.getItem('id') !== null) {
    return true;
  }
  return false;
}
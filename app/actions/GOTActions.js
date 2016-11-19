import {
  REQUEST_DATA
} from '../constants/GOTConstants';

export const requestData = (url, collection) => {
  return {
    type: REQUEST_DATA,
    url,
    collection
  }
};

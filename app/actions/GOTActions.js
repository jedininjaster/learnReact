import {
  REQUEST_DATA
} from '../constants/GOTConstants';

export const requestData = (url) => {
  return {
    type: REQUEST_DATA,
    url
  }
};

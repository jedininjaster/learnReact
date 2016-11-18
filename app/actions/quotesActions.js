import {
REQUEST_QUOTE,
QUOTE_RECEIVED
} from '../constants/quotesConstants';

export const requestQuote = () => {
  console.log('action');
  return {
    type: REQUEST_QUOTE
  }
};

export const quoteReceived = (quote) => {
  return {
    type: QUOTE_RECEIVED,
    quote
  }
};

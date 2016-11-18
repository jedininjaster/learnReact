import {
REQUEST_QUOTE,
QUOTE_RECEIVED
} from '../constants/quotes';

export const requestQuote = () => {
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

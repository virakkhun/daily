import { getQuoteAPI } from "@/app/_infrastructure/apis/quote.api";

export const QuoteController = {
  get: getQuoteAPI,
};

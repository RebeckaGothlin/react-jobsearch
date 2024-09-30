export type SearchFilterResponse = {
  id: string;
  municipality: string;
};

export type SearchAutocomplete = {
  value: string;
  type: string;
};

export type SearchAutocompleteValues = {
  typeahead: SearchAutocomplete[];
};

export type FilterResponses = {
  municipality?: SearchFilterResponse[];
  region?: RegionFilterResponse[];
};

export type SearchFilterResponse = {
  id: string;
  municipality: string;
};

export type RegionFilterResponse = {
  id: string;
  region: string;
};

export type SearchAutocomplete = {
  value: string;
  type: string;
};

export type SearchAutocompleteValues = {
  typeahead: SearchAutocomplete[];
};

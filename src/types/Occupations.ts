export type Occupations = {
  Yrkesgrupper: { [key: string]: OccupationFields }[];
};

export type OccupationFields = {
  Column3: string;
  Column4: string;
  Column5: string;
};

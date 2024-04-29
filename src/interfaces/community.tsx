/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ICommunityContext {
  pageName: string;
  user: any;
  postModal: boolean;
  setAddPostModal: (e) => void;
  peopleOrBrand: string;
  setPeopleOrBrand: (e) => void;
  filterModal: boolean;
   setFilterModal: (e) => void;
}

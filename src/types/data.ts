export type CategoryType = {
  id: string;
  name: string;
  icon: React.JSX.Element;
};

export type TourType = {
  id: string;
  name: string;
  bgImage: any;
  distance: number;
};

export type DataType = {
  title: string;
  id: string;
  data: CategoryType[] | TourType[];
};

export type FacilityItemType = {
  id: string;
  name: string;
};

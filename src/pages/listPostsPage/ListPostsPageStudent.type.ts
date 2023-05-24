export interface FilterFields {
  city?: string;
  title?: string;
  nb_rooms?: number;
  price?: number[];
  surface?: number[];
}
export interface FilterProps {
  handleCityChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleNbRoomsChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handlePriceChange: (interval: number[]) => void;
  handleSurfaceChange: (interval: number[]) => void;
  filter?: FilterFields;
  handleResetFilter?: () => void;
}

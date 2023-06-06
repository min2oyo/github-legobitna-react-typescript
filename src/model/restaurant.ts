export type Address = {
  city: string;
  detail: string;
  zipCode?: number; // Omit의 다른 형태
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type AddressWithoutZip = Omit<Address, `zipCode`>;
export type RestaurantOnlyCategory = Pick<Restaurant, `category`>;

export type ApiResponse<T> = {
  data: T[];
  tatalPage: number;
  page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
export type BicycleId = number;

export interface BicyclesIndex {
  [index: number]: Bicycle;
}

export interface Bicycle {
  id: BicycleId;
  name: string;
  description: string;
  image: string;
  price: number;
}

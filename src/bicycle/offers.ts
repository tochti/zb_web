import { Moment, now } from "moment";

import { BicycleId, Bicycle, BicyclesIndex } from "./bicycle";

export class Offer {
  id: BicycleId;
  price: number;
  createdAt: Moment;
  expiresAt: Moment;

  isExpired(): boolean {
    return this.expiresAt.isBefore(now());
  }
}

export interface OffersIndex {
  [index: number]: Offer;
}

export const newest = (
  offers?: OffersIndex,
  bicycles?: BicyclesIndex
): { offer: Offer; bicycle: Bicycle } | null => {
  if (!offers) {
    return null;
  }

  if (!bicycles) {
    throw new Error("Missing bicycle for offer");
  }

  let newest = offers[0];
  for (let id in offers) {
    const o = offers[id];

    if (!o.isExpired()) {
      if (o.createdAt.isAfter(newest.createdAt)) {
        newest = o;
      }
    }
  }

  const bicycle = bicycles[newest.id];
  if (!bicycle) {
    throw new Error("Missing bicycle for offer");
  }

  return { offer: newest, bicycle: bicycle };
};

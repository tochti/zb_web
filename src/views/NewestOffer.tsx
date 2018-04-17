import React from "react";

import { OffersIndex, BicyclesIndex } from "../bicycle";
import { newest } from "../bicycle/offers";
import Spinner from "../components/Spinner";

interface Props {
  isRequesting: boolean;
  bicycles?: BicyclesIndex;
  offers?: OffersIndex;
}

const NewestOffer = ({ isRequesting, offers, bicycles }: Props) => {
  if (isRequesting) {
    return <Spinner />;
  }

  if (!offers) {
    return null;
  }

  const result = newest(offers, bicycles);
  if (!result) {
    return null;
  }

  const { offer, bicycle } = result;

  return (
    <div className="">
      <h1>{bicycle.name}</h1>
      <p>Price: {bicycle.price}</p>
      <p>Sale: {offer.price}</p>
      <p>Expires at: {offer.expiresAt}</p>
      <p>Created at: {offer.createdAt}</p>
      <img src={bicycle.image} />
      <p>{bicycle.description}</p>
    </div>
  );
};

export default NewestOffer;

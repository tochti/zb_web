import { AxiosError, AxiosResponse } from "axios";

import { Bicycle } from "../../bicycle/bicycle";
import { Offer } from "../../bicycle/offers";
import http from "./index";
import APIError, { ErrorType } from "../errors";

const validateResponse = (res: AxiosResponse): Error | null => {
  const { data } = res;

  if (!data.offers) {
    return new Error("Missing offers key");
  }

  if (!data.bicycles) {
    return new Error("Missing bicycles key");
  }

  return null;
};

const requestOffers = (): Promise => {
  return http
    .exec({
      method: "GET",
      url: http.url("/offers")
    })
    .then((res: AxiosResponse) => {
      const err = validateResponse(res);
      if (err) {
        return {
          offers: null,
          bicycle: null,
          err: new APIError(ErrorType.Internal, err.message)
        };
      }

      return {
        offers: res.data.offers,
        bicycles: res.data.bicycles,
        err: null
      };
    })
    .catch((err: AxiosError) => ({
      offers: null,
      bicycles: null,
      err: http.createAPIError(err)
    }));
};

export { requestOffers };

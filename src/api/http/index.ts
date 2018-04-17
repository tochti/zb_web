import axios, { AxiosRequestConfig, AxiosError } from "axios";
import APIError, { ErrorType } from "../errors";

const baseURL = "http://localhost:3000/v1";

let timeout = 60 * 1000;

let client = axios.create({
  timeout: timeout
});

const exec = (cfg: AxiosRequestConfig) => {
  return client.request(cfg);
};

const url = (path: string) => {
  return baseURL + path;
};

const createAPIError = (err: AxiosError) => {
  if (err.response) {
    const { data, status } = err.response;

    if (status === 401) {
      return new APIError(ErrorType.Unauthenticated);
    }

    if (status === 403) {
      return new APIError(ErrorType.PermissionDenied);
    }

    if (status === 404) {
      return new APIError(ErrorType.NotFound);
    }

    if (status === 408 || err.code === "ECONNABORTED") {
      return new APIError(ErrorType.Timeout);
    }

    if (status >= 500) {
      return new APIError(ErrorType.Internal, data.message, data.request_id);
    }

    return new APIError(ErrorType.BadInput, data.message);
  } else if (err.request) {
    if (err.code === "ECONNABORTED") {
      return new APIError(ErrorType.Timeout);
    }

    return new APIError(ErrorType.Unavailable);
  }

  return new APIError(ErrorType.Unknown, err.message);
};

export { exec, timeout, client, baseURL, url, createAPIError };

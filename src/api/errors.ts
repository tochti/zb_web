export enum ErrorType {
  Unknown,
  BadInput,
  NotFound,
  PermissionDenied,
  Unauthenticated,
  Internal,
  Unavailable,
  Timeout,
  Offline
}

export default class APIError {
  type: ErrorType;
  message?: string;
  requestId?: string;

  constructor(type: ErrorType, msg?: string, requestId?: string) {
    this.type = type;
    this.message = msg;
    this.requestId = requestId;
  }
}

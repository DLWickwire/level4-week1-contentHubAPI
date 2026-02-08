export class HttpError extends Error {
  constructor(status, code, message, details) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export const badRequest = (message = 'Bad Request', details) =>
  new HttpError(400, 'bad_request', message, details);

export const unauthorized = (message = 'Unauthorized', details) =>
  new HttpError(401, 'unauthorized', message, details);

export const forbidden = (message = 'Forbidden', details) =>
  new HttpError(403, 'forbidden', message, details);

export const notFound = (message = 'Not Found', details) =>
  new HttpError(404, 'not_found', message, details);

export const conflict = (message = 'Conflict', details) =>
  new HttpError(409, 'conflict', message, details);
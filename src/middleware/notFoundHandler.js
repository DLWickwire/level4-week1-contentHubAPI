import { notFound } from '#utils/httpErrors';

export function notFoundHandler(req, _res, next) {
  next(notFound(`Route Not Found: ${req.method} ${req.path}`));
}

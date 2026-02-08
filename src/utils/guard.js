import { badRequest } from '#utils/httpErrors';

export function ensure(condition, err) {
  if (!condition) {
    throw err;
  }
}

export function ensureBodyFields(obj, fields) {
  const missing = fields.filter((f) => !obj?.[f]);
  if (missing.length > 0) {
    throw badRequest('missing required fields', { missing });
  }
}

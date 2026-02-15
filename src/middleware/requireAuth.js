import { verifyToken } from '#utils/jwt';
import { unauthorized } from '#utils/httpErrors';

export function requireAuth(req, _res, next) {
  const header = req.headers.authorization ?? '';
  const [scheme, token] = header.split(' ');

  if (scheme?.toLowerCase() !== 'bearer' || !token) {
    return next(unauthorized('missing Bearer token'));
  }

  try {
    const secret = req.app.locals.config.JWT_SECRET;
    const payload = verifyToken({ token, secret });

    req.user = { id: Number(payload.sub) };
    return next();
  } catch (err) {
    console.error(err);
    return next(unauthorized('Invalid token'));
  }
}
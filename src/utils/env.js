import dotenv from 'dotenv';
dotenv.config();

export function ensureEnv() {
  const PORT = Number(process.env.PORT ?? 3000);
  const JWT_SECRET = process.env.JWT_SECRET ?? '';

  if (!Number.isFinite(PORT) || PORT <= 0) throw new Error('Invalid PORT');
  if (JWT_SECRET.trim().length < 31)
    throw new Error('Invalid JWT_SECRET. Please set a long random string (32+ chars).');

  return { PORT, JWT_SECRET };
}

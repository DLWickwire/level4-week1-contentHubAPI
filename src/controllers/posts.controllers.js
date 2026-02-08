import { notFound } from '#utils/httpErrors';
import { ensureBodyFields } from '#utils/guard';
import { parsePagination } from '#utils/pagination';

export function listPosts(req, res) {
  const { posts } = res.locals.repos;

  const { limit, offset } = parsePagination(req.query);
  const result = posts.list({ limit, offset });

  return res.ok(result.items, {
    pagination: { limit, offset, total: result.total },
  });
}

export function getPost(req, res) {
  const { posts } = res.locals.repos;

  const id = Number(req.params.id);
  const post = posts.getById(id);

  if (!post) {
    throw notFound('Post not found');
  }

  return res.ok(post);
}

export function createPost(req, res) {
  const { posts } = res.locals.repos;
  ensureBodyFields(req.body, ['title', 'body']);
  const { title, body } = req.body ?? {};

  const created = posts.create({ title, body });
  return res.status(201).json({ data: created });
}

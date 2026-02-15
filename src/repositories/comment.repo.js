export function createCommentsRepo() {
  /** @type {Comment[]} */
  const comments = [];
  let nextId = 1;

  return {
    listForPost(postId, { limit = 20, offset = 0 } = {}) {
      const all = comments.filter((c) => c.postId === postId);
      const total = all.length;
      const items = all.slice(offset, offset + limit);
      return { items, total };
    },

    getById(id) {
      return comments.find((c) => c.id === id) ?? null;
    },

    create({ postId, body }) {
      const comment = { id: nextId++, postId, body };
      comments.push(comment);
      return comment;
    },

    update({ id, title, body, authorId }) {
      const post = posts.find((p) => p.id === id) ?? null;
      if (!post) return null;
      if (post.authorId !== authorId) return 'forbidden';

      post.title = title;
      post.body = body;
      return post;
    },

    delete({ id, authorId }) {
      const idx = posts.findIndex((p) => p.id === id);
      if (idx === -1) return null;
      if (posts[idx].authorId !== authorId) return 'forbidden';

      posts.splice(idx, 1);
      return true;
    },
  };
}

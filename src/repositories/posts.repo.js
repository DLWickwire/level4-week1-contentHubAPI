export function createPostsRepo() {
  const posts = [];
  let nextID = 1;

  return {
    list({ limit = 20, offset = 0 } = {}) {
      const total = posts.length;

      const filteredPosts = posts.slice(offset, offset + limit);
      return { items: filteredPosts, total };
    },

    getById(id) {
      return posts.find((post) => post.id === id);
    },

    create({ title, body }) {
      const post = { id: nextID++, title, body };
      posts.push(post);
      return post;
    },
  };
}

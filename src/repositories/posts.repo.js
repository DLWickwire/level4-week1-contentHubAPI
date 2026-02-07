const posts = [];
let nextID = 1;

export function createPostsRepo() {
  return {
    list() {
      return posts;
    },

    create({ title, body }) {
      const post = { id: nextID++, title, body };
      posts.push(post);
      return post;
    },
  };
}

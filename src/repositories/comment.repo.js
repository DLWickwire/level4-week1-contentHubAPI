// src/repositories/comment.repo.js
export function createCommentsRepo() {
  // simple in-memory store for Day 1
  const comments = [];

  return {
    list: () => comments,
    create: (comment) => {
      comments.push(comment);
      return comment;
    },
  };
}
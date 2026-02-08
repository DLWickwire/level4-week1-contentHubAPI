export async function createRepos() {
  const { createPostsRepo } = await import('./posts.repo.js');
  const { createCommentsRepo } = await import('./comment.repo.js');

  return {
    posts: createPostsRepo(),
    comments: createCommentsRepo(),
  };
}

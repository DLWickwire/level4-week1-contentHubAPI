export async function createRepos() {
  const { createPostsRepo } = await import('./posts.repo.js');
  const { createCommentsRepo } = await import('./comment.repo.js');
  const { createUsersRepo} = await import ('./users.repo.js')

  return {
    posts: createPostsRepo(),
    comments: createCommentsRepo(),
    users: createUsersRepo(),
  };
}

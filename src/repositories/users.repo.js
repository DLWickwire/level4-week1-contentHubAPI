// Simple in-memory Users repository
export function createUsersRepo() {
  const users = [];

  return {
    list: () => users,
    create: ({ username, email }) => {
      const user = { id: users.length + 1, username, email };
      users.push(user);
      return user;
    },
  };
}

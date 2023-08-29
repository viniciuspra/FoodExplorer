export const hasAdminAccess = (user) => {
  return user.isAdmin;
};

export const hasUserAccess = (user) => {
  return !user.isAdmin;
};

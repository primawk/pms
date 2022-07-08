const authHeader = () => {
  let user = null;
  if (typeof window !== 'undefined') {
    user = JSON.parse(localStorage.getItem('user-pms'));
  }
  if (user && user.access_token) {
    return { Authorization: `Bearer ${user.access_token}` };
  }
  return {};
};

export default authHeader;

export const setsessions = (key: string, value: string, days: number) => {
  const now = new Date();
  const expirationTime = now.getTime() + days * 24 * 60 * 60 * 1000;
  const data = {
    value,
    expiresAt: expirationTime,
  };
  localStorage.setItem(key, JSON.stringify(data));
};

export const getSessions = (key: string) => {
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }
  const session = JSON.parse(data);
  const now = new Date();
  if (now.getTime() > session.expiresAt) {
    localStorage.removeItem(key);
    return null;
  }

  return session.value;
};

import { useCookies } from 'react-cookie';

import { AUTH_COOKIE } from '../common/constants';

export function useAuth() {
  const [cookies, setCookie, removeCookie] = useCookies();

  const setToken = (token: string) => {
    // expire 50mins before BE (1h)
    return setCookie(AUTH_COOKIE, token, { path: '/', maxAge: 3000 });
  };

  const authToken = cookies[AUTH_COOKIE];

  // BE SET THIS
  const removeSession = () => removeCookie(AUTH_COOKIE);

  return {
    authToken,
    setToken,
    removeSession,
  };
}

export const ROOT_ROUTE = '/';
export const REGISTER_PAGE_ROUTE = `${ROOT_ROUTE}register`;
export const LOCATIONS_PAGE_ROUTE = `${ROOT_ROUTE}locations`;
export const ADDITIONAL_ABILITIES_PAGE_ROUTE = `${ROOT_ROUTE}additional-details`;
export const LOGIN_PAGE_ROUTE = `${ROOT_ROUTE}login`;
export const PROFILE_PAGE_ROUTE = `${ROOT_ROUTE}profile`;

export const ALL_ROUTES: Record<string, string> = {
  ROOT: ROOT_ROUTE,
  LOCATIONS_PAGE: LOCATIONS_PAGE_ROUTE,
  ADDITIONAL_ABILITIES_PAGE: ADDITIONAL_ABILITIES_PAGE_ROUTE,
  REGISTER_PAGE: REGISTER_PAGE_ROUTE,
  LOGIN_PAGE: LOGIN_PAGE_ROUTE,
  PROFILE_PAGE: PROFILE_PAGE_ROUTE
};

export default ALL_ROUTES;

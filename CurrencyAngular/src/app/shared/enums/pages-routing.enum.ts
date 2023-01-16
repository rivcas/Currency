export enum PagesRoutes {
  Empty = '',

  // pages
  Home = 'home',

  // error pages
  TmpError = 'tmperror',
  NotFound = '**',
}

export const PAGES_ROUTES_TITLES = {
  [PagesRoutes.Empty]: '',

  // home
  [PagesRoutes.Home]: 'דף הבית',

  // errors
  [PagesRoutes.TmpError]: 'שגיאה זמנית',
  [PagesRoutes.NotFound]: 'Not found',
};

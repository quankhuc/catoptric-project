export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'home',
  },
  routes: [
    {
      name: 'Dashboard',
      displayName: 'Dashboard',
      meta: { icon: 'devices' },
    },
    {
      name: 'single controller',
      displayName: 'Single Controller',
      meta: { icon: 'devices' },
    }
  ] as INavigationRoute[],
}

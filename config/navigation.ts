export enum PagePath {
  Index = '/',
  Home = '/home',
  History = '/history',
  User = '/user',
  HomeCreate = '/home/create',
  UserEdit = '/user/edit',
}

export const routes = [
  { tname: '@sentences', to: 'sentences' },
  { tname: '@sources', to: 'sources' },
]

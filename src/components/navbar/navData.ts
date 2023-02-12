interface NavData {
  id: number;
  text: string;
  url: string;
}

export const navData: NavData[] = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'projects',
    url: '/projects',
  },
  {
    id: 4,
    text: 'contact',
    url: '/contact',
  },
];

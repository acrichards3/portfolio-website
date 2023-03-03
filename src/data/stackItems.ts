import { StaticImageData } from 'next/image';
import TypeScript from '../images/stackItems/typescript.png';
import JavaScript from '../images/stackItems/javascript.png';
import ReactLogo from '../images/stackItems/react.png';
import NextJS from '../images/stackItems/next.png';
import tRPC from '../images/stackItems/trpc.png';
import Prisma from '../images/stackItems/prisma.png';
import PlanetScale from '../images/stackItems/planetscale.png';
import SCSS from '../images/stackItems/sass.png';
import WSL from '../images/stackItems/ubuntu.png';
import CSS from '../images/stackItems/css.png';
import Hook from '../images/stackItems/hook.png';
import Bootstrap from '../images/stackItems/bootstrap.png';
import Chess from '../images/stackItems/chess.png';
import Firebase from '../images/stackItems/firebase.png';
import Wordpress from '../images/stackItems/wordpress.png';
import Bluehost from '../images/stackItems/bluehost.png';
import Medium from '../images/stackItems/medium.png';

interface StackItem {
  stackItem: string;
  image?: string | StaticImageData;
  href: string;
}

export const stackItems: StackItem[] = [
  {
    stackItem: 'TypeScript',
    image: TypeScript,
    href: 'https://www.typescriptlang.org/',
  },
  {
    stackItem: 'JavaScript',
    image: JavaScript,
    href: 'https://www.javascript.com/',
  },
  { stackItem: 'React', image: ReactLogo, href: 'https://reactjs.org/' },
  { stackItem: 'NextJS', image: NextJS, href: 'https://nextjs.org/' },
  { stackItem: 'tRPC', image: tRPC, href: 'https://trpc.io/' },
  { stackItem: 'Prisma', image: Prisma, href: 'https://www.prisma.io/' },
  {
    stackItem: 'PlanetScale',
    image: PlanetScale,
    href: 'https://planetscale.com/',
  },
  { stackItem: 'SCSS Modules', image: SCSS, href: 'https://sass-lang.com/' },
  {
    stackItem: 'WSL',
    image: WSL,
    href: 'https://learn.microsoft.com/en-us/windows/wsl/',
  },
  {
    stackItem: 'CSS',
    image: CSS,
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    stackItem: 'React Hooks',
    image: Hook,
    href: 'https://reactjs.org/docs/hooks-intro.html',
  },
  {
    stackItem: 'React Bootstrap',
    image: Bootstrap,
    href: 'https://react-bootstrap.github.io/',
  },
  {
    stackItem: 'Chess.com Public API',
    image: Chess,
    href: 'https://github.com/andyruwruw/chess-web-api#readme',
  },
  {
    stackItem: 'Firebase',
    image: Firebase,
    href: 'https://firebase.google.com/',
  },
  { stackItem: 'Wordpress', image: Wordpress, href: 'https://wordpress.com/' },
  { stackItem: 'Bluehost', image: Bluehost, href: 'https://www.bluehost.com/' },
  { stackItem: 'Medium.com', image: Medium, href: 'https://medium.com/' },
];

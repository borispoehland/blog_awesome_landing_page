import { AiOutlineGithub } from 'react-icons/ai';
import { INavItem } from '../components/Navbar/Navbar';
import { BiBookBookmark } from 'react-icons/bi';

const getNavItems = (): INavItem[] => {
  return [
    {
      name: 'Linked article',
      href: 'https://www.borispoehland.com/blog/Awesome%20landing%20page%20with%20Next.js%20and%20Scrollmagic',
      icon: BiBookBookmark,
    },
    {
      name: 'Source code',
      href: 'https://github.com/borispoehland/next-landing-boilerplate-1',
      icon: AiOutlineGithub,
    },
  ];
};

export default getNavItems;

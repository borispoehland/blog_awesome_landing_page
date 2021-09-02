import { AiOutlineGithub } from 'react-icons/ai';
import { INavItem } from '../components/Navbar/Navbar';
import { BiBookBookmark } from 'react-icons/bi';

const getNavItems = (): INavItem[] => {
  return [
    {
      name: 'Linked article',
      href: 'https://www.borispoehland.com',
      icon: BiBookBookmark,
    },
    {
      name: 'Source code',
      href: 'https://www.github.com',
      icon: AiOutlineGithub,
    },
  ];
};

export default getNavItems;

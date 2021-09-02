import NextLink from '../NextLink';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import Image from 'next/image';
import { IconType } from 'react-icons';
import getNavItems from '../../data/navItems';
import ToNavItemConverter from './converters/ToNavItemConverter';

export interface INavItem {
  name: string;
  href: string;
  icon?: IconType;
}

const navItems = getNavItems();

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar">
      <div className="flex items-center justify-between h-20">
        <div className="relative flex-1 h-12">
          <Image
            src="https://www.borispoehland.com/img/bp-1.png"
            alt="Boris Pöhland Logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="hidden sm:flex">
          {navItems.map((item) => (
            <ToNavItemConverter
              key={item.href}
              className="px-3 py-2 rounded-md font-medium"
              {...item}
            />
          ))}
        </div>
        <div className="sm:hidden">
          <Menu as="div" className="relative">
            <Menu.Button className="flex">
              <span className="sr-only">Open menu</span>
              <RiMenu3Line className="h-8 w-8" color="white" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 z-10 mt-4 w-48 shadow-lg bg-white ring-1 ring-primary-500">
                {navItems.map((item) => (
                  <ToNavItemConverter
                    key={item.href}
                    className="px-4 py-2 justify-center"
                    {...item}
                  />
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import Image from 'next/image';
import { IconType } from 'react-icons';
import getNavItems from '../../data/navItems';
import ToNavItemConverter from './ToNavItemConverter';
import cx from 'classnames';
import { navAndFooterClassNames } from '../../data/classNames';

export interface INavItem {
  name: string;
  href: string;
  icon?: IconType;
}

const navItems = getNavItems();

const Navbar = (): JSX.Element => {
  return (
    <nav className={cx('navbar fixed top-2', navAndFooterClassNames)}>
      <div className="flex justify-between">
        <div className="relative flex-1 h-12 mx-3 md:mx-6">
          <Image
            src="/img/logo.png"
            alt="Boris Pöhland Logo"
            quality={100}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="hidden sm:flex mr-1">
          {navItems.map((item) => (
            <ToNavItemConverter
              key={item.href}
              className="px-3 py-2 rounded-md font-medium"
              {...item}
            />
          ))}
        </div>
        <div className="sm:hidden flex items-center">
          <Menu as="div" className="relative px-3">
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
              <Menu.Items className="origin-top-right absolute right-3 z-10 mt-4 w-48 shadow-lg bg-white ring-1 ring-primary-500">
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

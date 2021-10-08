import { FaHeart } from 'react-icons/fa';
import NextLink from './NextLink';
import cx from 'classnames';
import { navAndFooterClassNames } from '../data/classNames';

const Footer = (): JSX.Element => {
  return (
    <footer className={cx('footer relative bottom-2', navAndFooterClassNames)}>
      <div className="h-12 flex justify-center items-center gap-1">
        Demo made with <FaHeart color="red" /> by
        <NextLink href="https://www.borispoehland.com" hasExternalIndicator>
          Boris Pöhland
        </NextLink>
      </div>
    </footer>
  );
};

export default Footer;

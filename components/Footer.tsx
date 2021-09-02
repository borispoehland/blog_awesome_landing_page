import { FaHeart } from 'react-icons/fa';
import NextLink from './NextLink';

const Footer = (): JSX.Element => {
  return (
    <footer className="flex justify-center items-center gap-1 py-5 flex-wrap">
      Demo made with <FaHeart color="red" /> by
      <NextLink href="https://www.borispoehland.com" hasExternalIndicator>
        Boris Pöhland
      </NextLink>
    </footer>
  );
};

export default Footer;

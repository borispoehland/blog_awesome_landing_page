import NextLink from '../../NextLink';
import { INavItem } from '../Navbar';

interface IProps extends INavItem {
  className?: string;
}

const ToNavItemConverter = ({
  className,
  href,
  icon: Icon,
  name,
}: IProps): JSX.Element => {
  return (
    <NextLink key={href} href={href} hasExternalIndicator className={className}>
      {Icon && <Icon />}
      {name}
    </NextLink>
  );
};

export default ToNavItemConverter;

import Link from 'next/link';
import { GoLinkExternal } from 'react-icons/go';
import cx from 'classnames';
import { PropsWithChildren } from 'react';

interface IProps {
  className?: string;
  href: string;
  hasExternalIndicator?: boolean;
}

const NextLink = ({
  className,
  children,
  href,
  hasExternalIndicator,
}: PropsWithChildren<IProps>): JSX.Element => {
  const classNames = cx(
    className,
    'flex items-center gap-1 text-primary-500 font-bold hover:underline'
  );

  return (
    <Link href={href}>
      <a
        target={hasExternalIndicator ? '__blank' : undefined}
        className={classNames}
      >
        {children}
        {hasExternalIndicator && <GoLinkExternal />}
      </a>
    </Link>
  );
};

NextLink.defaultProps = {
  hasExternalIndicator: false,
};

export default NextLink;

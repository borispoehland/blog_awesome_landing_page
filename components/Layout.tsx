import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <div className="layout grid min-h-screen max-w-7xl mx-auto">
      <Navbar />
      <div className="px-3 md:px-6 lg:px-8">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

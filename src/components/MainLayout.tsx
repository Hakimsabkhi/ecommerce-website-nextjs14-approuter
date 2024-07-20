import React from 'react';
import Header from './Header';
import Headerbottom from './Headerbottom';
import Headertop from './Headertop';
import Bb from './bb';
import Footertop from './Footertop';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Headertop />
      <Header />
      <Headerbottom />
      <main>{children}</main>      
      <Bb />
    </div>
  );
};

export default MainLayout;
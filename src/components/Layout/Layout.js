import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutBox, Header } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <LayoutBox>
      <Header>
        <AppBar />
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};

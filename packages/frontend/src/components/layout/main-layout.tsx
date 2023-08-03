import { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollButton } from '@primitives';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { ToastStack } from '@components/toast';
import { ModalStack } from '@components/modal-stack';
import type { MainLayoutProps } from './types';
import * as styles from './styles';

export const MainLayout = ({
  withHeader = true,
  withFooter = true,
}: MainLayoutProps) => {
  const [scrollVisible, setScrollVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollVisible = () =>
      document.documentElement.scrollTop > 400
        ? setScrollVisible(true)
        : setScrollVisible(false);

    window.addEventListener('scroll', handleScrollVisible);
  }, []);

  return (
    <>
      {withHeader && <Header />}
      <main css={styles.main}>
        <ToastStack />
        <Suspense fallback={<span>Loading...</span>}>
          <Outlet />
        </Suspense>
        {scrollVisible && <ScrollButton />}
      </main>
      {withFooter && <Footer />}
      <ModalStack />
    </>
  );
};

import { useState, useEffect } from 'react';
import { useTitle } from '@hooks';
import { ScrollButton } from '@primitives';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { ToastStack } from '@components/toast';
import { ModalStack } from '@components/modal-stack';
import type { MainLayoutProps } from './types';
import { setTitle } from './utils';
import * as styles from './styles';

export const MainLayout = ({
  children,
  title,
  withHeader = true,
  withFooter = true,
}: MainLayoutProps) => {
  const [scrollVisible, setScrollVisible] = useState<boolean>(false);

  useTitle(setTitle(title));

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
        {children}
        {scrollVisible && <ScrollButton />}
      </main>
      {withFooter && <Footer />}
      <ModalStack />
    </>
  );
};

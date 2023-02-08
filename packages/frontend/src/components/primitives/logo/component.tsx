import { ClientRoutes } from '@enums';
import { Link } from 'react-router-dom';
import type { LogoProps } from './types';
import { setLogoColor } from './utils';
import * as styles from './styles';

export const Logo = ({ contrast = 'dark', size = 'sm' }: LogoProps) => (
  <Link to={ClientRoutes.HOME}>
    <img
      css={styles.logo}
      src={setLogoColor(contrast)}
      alt="logo"
      title="HOME"
      data-size={size}
    />
  </Link>
);

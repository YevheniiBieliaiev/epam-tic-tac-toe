import * as svgIcons from '@svg-icons';
import * as styles from './style';

export const ScrollButton = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button css={styles.scroll} onClick={scrollToTop}>
      <span css={styles.icon}>
        <img src={svgIcons['arrowUp']} alt="arrow-up" />
      </span>
    </button>
  );
};

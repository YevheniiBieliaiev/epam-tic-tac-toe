import * as styles from './styles';

export const AppSpinner = () => (
  <div css={styles.spinnerRoot}>
    <div css={styles.appSpinner}>
      <div css={styles.symbolsGroup}>
        <div css={styles.x}>
          <div css={styles.xLine}></div>
          <div css={[styles.xLine, styles.xHorizontal]}></div>
        </div>

        <div css={styles.o}></div>
      </div>

      <div css={styles.symbolsGroup}>
        <div css={styles.x}>
          <div css={styles.xLine}></div>
          <div css={[styles.xLine, styles.xHorizontal]}></div>
        </div>

        <div css={styles.o}></div>
      </div>

      <div css={styles.symbolsGroup}>
        <div css={styles.x}>
          <div css={styles.xLine}></div>
          <div css={[styles.xLine, styles.xHorizontal]}></div>
        </div>

        <div css={styles.o}></div>
      </div>
    </div>
  </div>
);

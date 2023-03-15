import { SVGIcon } from '@primitives';
import { enLocal } from '@locals';
import type { BotGametatisticProps, UserGameStatisticProps } from './types';
import * as styles from './styles';

export const BotGameStatistic = ({
  won,
  draw,
  robotWon,
}: BotGametatisticProps) => (
  <div css={styles.statistic}>
    <div css={styles.statisticInner}>
      <div css={styles.row}>
        <SVGIcon icon="trophy" />
        <div>
          <span>{enLocal.playBoard.bot.userStatistic.won}</span>
          <span>{won}</span>
        </div>
      </div>
      <div css={styles.row}>
        <SVGIcon icon="handshake" />
        <div>
          <span>{enLocal.playBoard.bot.userStatistic.draw}</span>
          <span>{draw}</span>
        </div>
      </div>
      <div css={styles.row}>
        <SVGIcon icon="trophy" />
        <div>
          <span>{enLocal.playBoard.bot.userStatistic.robotWon}</span>
          <span>{robotWon}</span>
        </div>
      </div>
    </div>
  </div>
);

export const UserGameStatistic = ({
  won,
  draw,
  lose,
}: UserGameStatisticProps) => (
  <div css={styles.statistic}>
    <div css={styles.statisticInner}>
      <div css={styles.row}>
        <SVGIcon icon="trophy" />
        <div>
          <span>{enLocal.playBoard.users.userStatistic.won}</span>
          <span>{won}</span>
        </div>
      </div>
      <div css={styles.row}>
        <SVGIcon icon="handshake" />
        <div>
          <span>{enLocal.playBoard.users.userStatistic.draw}</span>
          <span>{draw}</span>
        </div>
      </div>
      <div css={styles.row}>
        <SVGIcon icon="trophy" />
        <div>
          <span>{enLocal.playBoard.users.userStatistic.lose}</span>
          <span>{lose}</span>
        </div>
      </div>
    </div>
  </div>
);

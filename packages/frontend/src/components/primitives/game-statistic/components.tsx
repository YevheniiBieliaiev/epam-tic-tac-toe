import { SVGIcon } from '@primitives';
import { enLocal } from '@locals';
import { useAppSelector } from '@hooks';
import { botGameStat } from '@selectors';
import type { UserGameStatisticProps } from './types';
import * as styles from './styles';

export const BotGameStatistic = () => {
  const { won, draw, robotWon } = useAppSelector(botGameStat);

  return (
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
};

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

type OpponentType = 'own' | 'opponent';

export interface UserGameStatisticProps {
  type?: OpponentType;
  won: number;
  draw: number;
  lose: number;
}

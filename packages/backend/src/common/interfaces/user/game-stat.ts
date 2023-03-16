export interface IUpdGameBotStat {
  userId: string;
  won: number;
  draw: number;
  robotWon: number;
}

export interface IUpdGameUserStat {
  userId: string;
  won: number;
  draw: number;
  lose: number;
}

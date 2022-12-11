declare interface ParamsDictionary {
  token: string;
  [key: string]: string;
}

declare interface Query {
  [key: string]: undefined | string | string[] | Query | Query[];
}

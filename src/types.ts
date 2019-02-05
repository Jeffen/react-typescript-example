// from typings
export interface RouteComponentProps<P> {
  match: match<P>;
  location: Location;
  history: History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

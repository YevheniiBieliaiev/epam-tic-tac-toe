type Marks = 'filled circle';

export interface ListProps {
  list: string[];
  marks?: Marks;
  isOrdered?: boolean;
}

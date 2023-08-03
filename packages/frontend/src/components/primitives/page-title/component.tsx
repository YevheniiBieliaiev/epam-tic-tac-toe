import type { PageTitles } from '@enums';
import { useTitle } from '@hooks';
import { setTitle } from './utils';

export const PageTitle = ({
  title,
  children,
}: {
  title?: PageTitles;
  children: React.ReactElement;
}) => {
  useTitle(setTitle(title));

  return children;
};
